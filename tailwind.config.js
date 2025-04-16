// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        "primary-foreground": "#ffffff",
        secondary: "#f3f4f6",
        "secondary-foreground": "#111827",
        destructive: "#ef4444",
        "destructive-foreground": "#ffffff",
        accent: "#e0e7ff",
        "accent-foreground": "#1e40af",
        ring: "#c7d2fe",
      },
    },
  },
  plugins: [],
}
