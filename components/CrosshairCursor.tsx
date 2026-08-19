"use client";

import { useEffect, useRef, type CSSProperties, type RefObject } from "react";

interface CrosshairCursorProps {
  verticalColor?: string;
  verticalThickness?: number;
  horizontalColor?: string;
  horizontalThickness?: number;
  dotColor?: string;
  dotSize?: number;
  dotDisabled?: boolean;
  showPosition?: boolean;
  labelMode?: "position" | "custom";
  labelText?: string;
  labelFont?: CSSProperties;
  labelColor?: string;
  labelBg?: string;
  labelPaddingX?: number;
  labelPaddingY?: number;
  labelRadius?: number;
  containerRef: RefObject<HTMLDivElement | null>;
}

export default function CrosshairCursor({
  verticalColor = "rgba(255, 255, 255, 0.4)",
  verticalThickness = 1,
  horizontalColor = "rgba(255, 255, 255, 0.4)",
  horizontalThickness = 1,
  dotDisabled = false,
  dotColor = "#19FA2F",
  dotSize = 8,
  showPosition = true,
  labelMode = "position",
  labelText = "Aim",
  labelFont = {
    fontFamily: "Tahoma, sans-serif",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: "1.5em",
    letterSpacing: "0em",
    textAlign: "left",
  },
  labelColor = "#ffffff",
  labelBg = "#0a2f8f",
  labelPaddingX = 6,
  labelPaddingY = 4,
  labelRadius = 2,
  containerRef,
}: CrosshairCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorEl = cursorRef.current;
    const container = containerRef.current;
    if (!cursorEl || !container) return;

    let isInside = false;

    const updatePosition = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const relativeY = clientY - rect.top;

      const inside =
        relativeX >= 0 &&
        relativeX <= rect.width &&
        relativeY >= 0 &&
        relativeY <= rect.height;

      if (inside !== isInside) {
        isInside = inside;
        cursorEl.style.setProperty("--cursor-visible", inside ? "1" : "0");
      }

      cursorEl.style.setProperty("--cursor-x", `${relativeX}px`);
      cursorEl.style.setProperty("--cursor-y", `${relativeY}px`);

      if (showPosition && labelRef.current) {
        if (labelMode === "custom") {
          labelRef.current.textContent = labelText;
        } else {
          labelRef.current.textContent = `X: ${Math.round(relativeX)}  Y: ${Math.round(relativeY)}`;
        }
      }
    };

    const handleMouseMove = (ev: MouseEvent) => {
      updatePosition(ev.clientX, ev.clientY);
    };

    const handleTouchMove = (ev: TouchEvent) => {
      if (!ev.touches.length) return;
      const touch = ev.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    const handleMouseEnter = () => {
      isInside = true;
      cursorEl.style.setProperty("--cursor-visible", "1");
    };

    const handleMouseLeave = () => {
      isInside = false;
      cursorEl.style.setProperty("--cursor-visible", "0");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef, labelMode, labelText, showPosition]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 2147483647,
        pointerEvents: "none",
        opacity: "var(--cursor-visible, 0)",
        transition: "opacity 0.1s ease-in-out",
        /* Pre-initialize values so no layouts are broken before first mousemove */
        ["--cursor-x" as any]: "0px",
        ["--cursor-y" as any]: "0px",
        ["--cursor-visible" as any]: "0",
      }}
    >
      {/* Vertical line */}
      <div
        style={{
          transform: "translate3d(var(--cursor-x), 0px, 0px) translateX(-50%)",
          position: "absolute",
          top: 0,
          height: "100%",
          width: verticalThickness,
          pointerEvents: "none",
          backgroundColor: verticalColor,
          willChange: "transform",
        }}
      />
      {/* Horizontal line */}
      <div
        style={{
          transform: "translate3d(0px, var(--cursor-y), 0px) translateY(-50%)",
          position: "absolute",
          left: 0,
          width: "100%",
          height: horizontalThickness,
          pointerEvents: "none",
          backgroundColor: horizontalColor,
          willChange: "transform",
        }}
      />
      {/* Center dot */}
      {!dotDisabled && (
        <div
          style={{
            transform: "translate3d(var(--cursor-x), var(--cursor-y), 0px) translate(-50%, -50%)",
            position: "absolute",
            width: dotSize,
            height: dotSize,
            borderRadius: "100%",
            backgroundColor: dotColor,
            pointerEvents: "none",
            willChange: "transform",
          }}
        />
      )}
      {/* Text coordinates label */}
      {showPosition && (
        <div
          ref={labelRef}
          style={{
            transform: "translate3d(var(--cursor-x), var(--cursor-y), 0px) translate(12px, 12px)",
            position: "absolute",
            pointerEvents: "none",
            lineHeight: 1,
            ...labelFont,
            color: labelColor,
            background: labelBg,
            padding: `${labelPaddingY}px ${labelPaddingX}px`,
            borderRadius: labelRadius,
            whiteSpace: "nowrap",
            border: "1px solid #1958d6",
            boxShadow: "1px 1px 3px rgba(0,0,0,0.2)",
            willChange: "transform",
          }}
        />
      )}
    </div>
  );
}
