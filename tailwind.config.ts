import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        xp: ["Tahoma", "Segoe UI", "Verdana", "sans-serif"],
      },
      colors: {
        xp: {
          blue: "#1957d6",
          bluedark: "#0a2f8f",
          bluemid: "#3593ff",
          bluelight: "#5aa6ff",
          green: "#3f9a1a",
          greendark: "#2c7d10",
          window: "#ece9d8",
        },
      },
      boxShadow: {
        xpwin: "3px 4px 18px rgba(0,0,0,.45)",
      },
    },
  },
  plugins: [],
};
export default config;
