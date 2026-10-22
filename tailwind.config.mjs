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
        /* light theme: Tailwind "white"/"black" are remapped so legacy text-white / border-white/x utilities
           read as ink and hairlines on the light canvas */
        white: "#0E1A24",
        black: "#F6F9FB",
        nex: {
          /* NEX brand palette, sampled from the official logo (blue derrick + green leaf/wave) */
          fondo: "#F6F9FB",
          "fondo-alt": "#EEF4F8",
          surface: "#FFFFFF",
          "surface-2": "#F1F6F9",
          blanco: "#0E1A24",
          gris: "#5B6872",
          "gris-dark": "#5C6873",

          azul: "#2F78B4",
          "azul-hover": "#3A88C6",
          "azul-deep": "#17405F",
          "azul-light": "#2F78B4",
          verde: "#68B05A",
          "verde-light": "#8FD07A",
          "verde-deep": "#3F8A4A",

          /* "oro" was the old accent; it now resolves to the brand blue so existing pages follow the new palette */
          oro: "#2F78B4",
          "oro-light": "#3A88C6",
          "oro-dark": "#2F78B4",

          /* Backwards-compatible aliases (mapped onto the new palette) */
          navy: "#0E1A24",
          "navy-dark": "#0E1A24",
          gold: "#2F78B4",
          "gold-light": "#3A88C6",
          white: "#0E1A24",
          "off-white": "#EEF4F8",
          "gray-900": "#0E1A24",
          "gray-700": "#4A5863",
          "gray-500": "#5B6872",
          "gray-300": "#5C6873",
          "gray-100": "#E4ECF2",
          success: "#357A3F",
          warning: "#D9A94B",
          danger: "#E06B6B",
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
