module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4faf3',
          100: '#e5f4e4',
          200: '#cce8ca',
          300: '#a6d4a1',
          400: '#76b870',
          500: '#529b4c',
          600: '#468b40',
          700: '#356431',
          800: '#2d512a',
          900: '#264324',
        },
        secondary: {
          50: '#fbf6f1',
          100: '#f6ebde',
          200: '#ecd3bc',
          300: '#dfb592',
          400: '#d19066',
          500: '#c77548',
          600: '#b9603d',
          700: '#9a4c34',
          800: '#7c3f30',
          900: '#5f3227',
        },
      },
      fontFamily: {
        sans: ['Libre Franklin', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
