module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logo: {
          primary: "var(--logo-primary)",
          secondary: "var(--logo-secondary)",
        },
        footer: {
          light: "var(--footer-light)",
          mid: "var(--footer-mid)",
          dark: "var(--footer-dark)",
          deepDark: "var(--footer-deep-dark)",
        },
        neutral: {
          lightest: "var(--neutral-lightest)",
          light: "var(--neutral-light)",
          mid: "var(--neutral-mid)",
        },
      },
    },
  },
  plugins: [],
};
