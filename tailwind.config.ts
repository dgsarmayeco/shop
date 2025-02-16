module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001529",
        secondary: "#ffcf40",
      },
      fontFamily: {
        custom: ['"poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
