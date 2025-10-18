/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Wedding Invitation Theme Colors
        invitation: {
          background: "#FAFAFA",
          text: "#000000",
          button: "#EF544F",
          buttonText: "#FFFFFF",
          decorative: {
            brown: "#8B6B5B",
            orange: "#CC5500",
            purple: "#4B0082",
            maroon: "#800020",
          },
        },
        // Direct border color access
        "invitation-decorative-brown": "#8B6B5B",
        // Existing primary colors
        primary: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        gradient: {
          from: "#fdcfc8",
          to: "#ffffff",
        },
        background: {
          main: "#272938",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        // Wedding Invitation Fonts
        montaga: ["Montaga", "serif"],
        pompiere: ["Pompiere", "cursive"],
        laila: ["Laila", "serif"],
        poly: ["Poly", "serif"],
        "darker-grotesque": ['"Darker Grotesque"', "sans-serif"],
      },
      fontSize: {
        // Wedding Invitation Typography Scale
        "invitation-hero": ["40px", { lineHeight: "1.232", fontWeight: "400" }], // Bride/Groom names
        "invitation-title": [
          "38px",
          { lineHeight: "1.232", fontWeight: "400" },
        ], // Event names (Wedding, Haldi, etc.)
        "invitation-body": ["32px", { lineHeight: "1.202", fontWeight: "400" }], // Main invitation text
        "invitation-accent": [
          "26px",
          { lineHeight: "1.188", fontWeight: "400" },
        ], // "weds" text
        "invitation-detail": [
          "24px",
          { lineHeight: "1.55", fontWeight: "400" },
        ], // Event details
        "invitation-detail-bold": [
          "24px",
          { lineHeight: "1.55", fontWeight: "600" },
        ], // Event dates/times
        "invitation-detail-light": [
          "24px",
          { lineHeight: "1.55", fontWeight: "300" },
        ], // Hashtags
        "invitation-parent": [
          "17px",
          { lineHeight: "1.232", fontWeight: "400" },
        ], // Parent names
        "invitation-button": [
          "16px",
          { lineHeight: "1.25", fontWeight: "700", letterSpacing: "0.625%" },
        ], // Button text
      },
      spacing: {
        90: "22.5rem",
        // Wedding Invitation Card Dimensions
        "invitation-width": "390px",
        "invitation-height": "2043px",
        "invitation-border": "1px",
      },
      maxWidth: {
        // Responsive wedding invitation container widths
        "invitation-sm": "390px",
        "invitation-md": "450px",
        "invitation-lg": "520px",
        "invitation-xl": "600px",
        "invitation-2xl": "650px",
      },
      zIndex: {
        // Wedding invitation layer management
        decoration: "1",
        floral: "2",
        content: "10",
        "text-overlay": "20",
        button: "30",
      },
      borderRadius: {
        "invitation-button": "8px",
      },
      // Wedding Invitation Component Classes
      textTransform: {
        "invitation-button": "uppercase",
      },
    },
  },
  plugins: [
    // Custom plugin for wedding invitation component utilities
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".invitation-card": {
          width: theme("spacing.invitation-width"),
          height: theme("spacing.invitation-height"),
          backgroundColor: theme("colors.invitation.background"),
          border: `${theme("spacing.invitation-border")} solid ${theme(
            "colors.invitation.text"
          )}`,
          position: "relative",
          overflow: "hidden",
        },
        ".invitation-text-hero": {
          fontFamily: theme("fontFamily.montaga"),
          fontSize: theme("fontSize.invitation-hero[0]"),
          lineHeight: theme("fontSize.invitation-hero[1].lineHeight"),
          fontWeight: theme("fontSize.invitation-hero[1].fontWeight"),
          color: theme("colors.invitation.text"),
          textAlign: "center",
        },
        ".invitation-text-title": {
          fontFamily: theme("fontFamily.montaga"),
          fontSize: theme("fontSize.invitation-title[0]"),
          lineHeight: theme("fontSize.invitation-title[1].lineHeight"),
          fontWeight: theme("fontSize.invitation-title[1].fontWeight"),
          color: theme("colors.invitation.text"),
          textAlign: "center",
        },
        ".invitation-text-body": {
          fontFamily: theme("fontFamily.pompiere"),
          fontSize: theme("fontSize.invitation-body[0]"),
          lineHeight: theme("fontSize.invitation-body[1].lineHeight"),
          fontWeight: theme("fontSize.invitation-body[1].fontWeight"),
          color: theme("colors.invitation.text"),
          textAlign: "center",
        },
        ".invitation-text-accent": {
          fontFamily: theme("fontFamily.poly"),
          fontSize: theme("fontSize.invitation-accent[0]"),
          lineHeight: theme("fontSize.invitation-accent[1].lineHeight"),
          fontWeight: theme("fontSize.invitation-accent[1].fontWeight"),
          color: theme("colors.invitation.text"),
          textAlign: "center",
        },
        ".invitation-text-detail": {
          fontFamily: theme("fontFamily.laila"),
          fontSize: theme("fontSize.invitation-detail[0]"),
          lineHeight: theme("fontSize.invitation-detail[1].lineHeight"),
          fontWeight: theme("fontSize.invitation-detail[1].fontWeight"),
          color: theme("colors.invitation.text"),
          textAlign: "center",
        },
        ".invitation-text-detail-bold": {
          fontFamily: theme("fontFamily.laila"),
          fontSize: theme("fontSize.invitation-detail-bold[0]"),
          lineHeight: theme("fontSize.invitation-detail-bold[1].lineHeight"),
          fontWeight: theme("fontSize.invitation-detail-bold[1].fontWeight"),
          color: theme("colors.invitation.text"),
          textAlign: "center",
        },
        ".invitation-text-detail-light": {
          fontFamily: theme("fontFamily.laila"),
          fontSize: theme("fontSize.invitation-detail-light[0]"),
          lineHeight: theme("fontSize.invitation-detail-light[1].lineHeight"),
          fontWeight: theme("fontSize.invitation-detail-light[1].fontWeight"),
          color: theme("colors.invitation.text"),
          textAlign: "center",
        },
        ".invitation-text-parent": {
          fontFamily: theme("fontFamily.montaga"),
          fontSize: theme("fontSize.invitation-parent[0]"),
          lineHeight: theme("fontSize.invitation-parent[1].lineHeight"),
          fontWeight: theme("fontSize.invitation-parent[1].fontWeight"),
          color: theme("colors.invitation.text"),
          textAlign: "center",
        },
        ".invitation-button": {
          backgroundColor: theme("colors.invitation.button"),
          color: theme("colors.invitation.buttonText"),
          fontFamily: theme("fontFamily.darker-grotesque"),
          fontSize: theme("fontSize.invitation-button[0]"),
          lineHeight: theme("fontSize.invitation-button[1].lineHeight"),
          fontWeight: theme("fontSize.invitation-button[1].fontWeight"),
          letterSpacing: theme("fontSize.invitation-button[1].letterSpacing"),
          textTransform: "uppercase",
          textAlign: "center",
          borderRadius: theme("borderRadius.invitation-button"),
          padding: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
