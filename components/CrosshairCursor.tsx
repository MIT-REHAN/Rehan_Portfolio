"use client";

import { useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";
import { motion } from "framer-motion";

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

const useMousePosition = (containerRef: RefObject<HTMLDivElement | null>) => {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const updatePosition = (clientX: number, clientY: number) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const relativeX = clientX - rect.left;
        const relativeY = clientY - rect.top;
        const mouseInside =
          relativeX >= 0 &&
          relativeX <= rect.width &&
          relativeY >= 0 &&
          relativeY <= rect.height;
        setMousePosition({ x: relativeX, y: relativeY });
        setIsInside(mouseInside);
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
    const handleMouseEnter = () => setIsInside(true);
    const handleMouseLeave = () => setIsInside(false);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [containerRef]);

  return { mousePosition, isInside };
};

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
  const { mousePosition, isInside } = useMousePosition(containerRef);

  const crosshairPosition = { x: mousePosition.x || 0, y: mousePosition.y || 0 };
  const hasValidMousePosition = mousePosition.x !== null && mousePosition.y !== null;
  const isVisible = hasValidMousePosition && isInside;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 2147483647,
        pointerEvents: "none",
      }}
    >
      <motion.div
        style={{
          left: `${crosshairPosition.x}px`,
          position: "absolute",
          top: 0,
          height: "100%",
          width: verticalThickness,
          transform: "translateX(-50%)",
          pointerEvents: "none",
          backgroundColor: verticalColor,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          top: `${crosshairPosition.y}px`,
          position: "absolute",
          left: 0,
          width: "100%",
          height: horizontalThickness,
          transform: "translateY(-50%)",
          pointerEvents: "none",
          backgroundColor: horizontalColor,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      />
      {dotDisabled ? null : (
        <motion.div
          style={{
            top: `${crosshairPosition.y}px`,
            left: `${crosshairPosition.x}px`,
            position: "absolute",
            width: dotSize,
            height: dotSize,
            borderRadius: "100%",
            backgroundColor: dotColor,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        />
      )}
      {showPosition && (
        <motion.div
          style={{
            top: `${crosshairPosition.y}px`,
            left: `${crosshairPosition.x}px`,
            position: "absolute",
            transform: "translate(12px, 12px)",
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
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          {labelMode === "custom"
            ? labelText
            : `X: ${Math.round(crosshairPosition.x)}  Y: ${Math.round(crosshairPosition.y)}`}
        </motion.div>
      )}
    </div>
  );
}
