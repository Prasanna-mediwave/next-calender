import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        primaryContent: "rgb(var(--primary-content) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        secondaryContent: "rgb(var(--secondary-content) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accentContent: "rgb(var(--accent-content) / <alpha-value>)",
        neutral: "rgb(var(--neutral) / <alpha-value>)",
        baseColor: "rgb(var(--baseColor) / <alpha-value>)",
        titleColor: "rgb(var(--titleColor) / <alpha-value>)",
        container: "rgb(var(--container) / <alpha-value>)",
        outlineColor: "rgb(var(--outline) / <alpha-value>)",
        info: "rgb(var(--info) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        error: "rgb(var(--error) / <alpha-value>)",
        disabled: "rgb(var(--disabled) / <alpha-value>)",
        transparent: "var(--transparent)",
        calHeading: "rgb(var(--calHeading) / <alpha-value>)",
        mood: {
          verypoorly: "var(--mood-verypoorly)",
          verypoor: "var(--mood-verypoorly)",
          poor: "var(--mood-poor)",
          alright: "var(--mood-alright)",
          well: "var(--mood-well)",
          verywell: "var(--mood-verywell)",
        },
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
      },
      fontFamily: {
        header: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1.25rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.375rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.625rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      "2xl": [
        "1.375rem",
        {
          lineHeight: "1.875rem",
        },
      ],
      "3xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "4xl": [
        "1.625rem",
        {
          lineHeight: "2.125rem",
        },
      ],
      "5xl": [
        "1.75rem",
        {
          lineHeight: "2.25rem",
        },
      ],
      "6xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "7xl": [
        "2.25rem",
        {
          lineHeight: "2.875rem",
        },
      ],
      "8xl": [
        "2.5rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "9xl": [
        "2.75rem",
        {
          lineHeight: "3.375rem",
        },
      ],
      xxl: [
        "4rem",
        {
          lineHeight: "4.375rem",
        },
      ],
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
export default config;
