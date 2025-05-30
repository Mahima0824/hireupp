/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      screens: {
        "2xl": "1320px",
      },
      colors: {
        // Updated Professional Color Scheme for Job Portal
        primary: "#2563EB",
        secondary: "#3B82F6",
        highlight: "#93C5FD",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        surface: "#F8FAFC",
        white: "#FFFFFF",
        gray: {
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1D2939",
          900: "#0F172A",
        },
      },
      fontSize: {
        // Custom Font Sizes
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      spacing: {
        // Custom Spacing
        18: "4.5rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
      },
      boxShadow: {
        // Custom Box Shadows
        "blue-light": "0 4px 6px rgba(29, 78, 216, 0.1)",
        "blue-medium": "0 10px 15px rgba(29, 78, 216, 0.15)",
        "blue-dark": "0 15px 30px rgba(29, 78, 216, 0.2)",
        button: "0px 4px 10px rgba(29, 78, 216, 0.25)",
      },
      animation: {
        // Custom Animations
        fadeIn: "fadeIn 0.5s ease-out",
        slideDown: "slideDown 0.3s ease-out",
        slideUp: "slideUp 0.3s ease-out",
        pulse: "pulse 2s infinite",
        'pulse-slow': 'pulse 3s infinite',
        'bounce-subtle': 'bounce-subtle 2s infinite',
        'border-glow': 'border-glow 2s infinite',
        navHover: "navHover 0.3s ease-out",
        glowPulse: "glowPulse 1.5s ease-in-out infinite",
        borderMove: "borderMove 2s ease-in-out infinite",
        ripple: "ripple 0.5s ease-out",
        shimmer: "shimmer 2s linear infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        scaleIn: "scaleIn 0.3s ease-out",
        rotateIcon: "rotateIcon 0.3s ease-out",
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(-1px)' },
          '50%': { transform: 'translateY(1px)' },
        },
        'border-glow': {
          '0%, 100%': {
            borderColor: 'rgba(37, 99, 235, 0.3)',
            boxShadow: '0 0 5px rgba(37, 99, 235, 0.3)',
          },
          '50%': {
            borderColor: 'rgba(37, 99, 235, 0.6)',
            boxShadow: '0 0 15px rgba(37, 99, 235, 0.5)',
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        rotateIcon: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
        navHover: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },

        borderMove: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: 1 },
          "100%": { transform: "scale(4)", opacity: 0 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
