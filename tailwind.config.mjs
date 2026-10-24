/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        /* glass-on-photo theme: white is real white again (text and hairlines over the dark backdrop) */
        white: "#FFFFFF",
        black: "#1E2019",
        nex: {
          /* NEX brand palette, sampled from the official logo (blue derrick + green leaf/wave) */
          fondo: "transparent",
          "fondo-alt": "rgba(255,255,255,0.05)",
          surface: "rgba(255,255,255,0.08)",
          "surface-2": "rgba(255,255,255,0.06)",
          blanco: "#FFFFFF",
          gris: "#DBE3E8",
          "gris-dark": "#C9D4DA",

          azul: "#2F78B4",
          "azul-hover": "#3A88C6",
          "azul-deep": "#17405F",
          "azul-light": "#9FD0EE",
          verde: "#68B05A",
          "verde-light": "#8FD07A",
          "verde-deep": "#3F8A4A",

          /* "oro" was the old accent; it now resolves to the brand blue so existing pages follow the new palette */
          oro: "#9FD0EE",
          "oro-light": "#BFE0F2",
          "oro-dark": "#2F78B4",

          /* Backwards-compatible aliases (mapped onto the new palette) */
          navy: "#0E1A24",
          "navy-dark": "#0E1A24",
          gold: "#9FD0EE",
          "gold-light": "#BFE0F2",
          white: "#FFFFFF",
          "off-white": "rgba(255,255,255,0.05)",
          "gray-900": "#FFFFFF",
          "gray-700": "#E3EAEF",
          "gray-500": "#DBE3E8",
          "gray-300": "#C9D4DA",
          "gray-100": "rgba(255,255,255,0.12)",
          success: "#8FD07A",
          warning: "#D9A94B",
          danger: "#F59A9A",
        },
      },
      fontFamily: {
        sans: ["Satoshi", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        serif: ["Satoshi", "Georgia", "serif"],
      },
      letterSpacing: {
        brand: "0.3em",
        title: "0.28em",
      },
      maxWidth: {
        content: "1200px",
      },
      transitionTimingFunction: {
        nex: "cubic-bezier(.2, .8, .2, 1)",
      },
      boxShadow: {
        card: "inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 40px -24px rgba(0,0,0,0.8)",
        pill: "inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.3)",
        header: "0 10px 30px rgba(0,0,0,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(.2,.8,.2,1) both",
      },
    },
  },
  plugins: [],
};
