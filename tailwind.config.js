module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
          brand: {
            light: "#fff",
            dark: "#0C0C0C",
          },
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
