/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        gradientBg: {
          800: '#F2F2F2',
        },
        buttonHoverIndigio: {
          800: '#666CA3',
        },
        darkIndigo: {
          800: '#13183F',
        },
        textGray: {
          800: '#83869A',
        },
        textPink: {
          800: '#F74780',
        },
        textPinkLink: {
          800: '#FFA7C3',
        },
        gradientPink: {
          800: '#F02AA6',
          100: '#FF6F48',
        },
        gradientPurple: {
          800: '#4851FF',
          100: '#F02AA6',
        },
        courseBgGradient: {
          800: '#f0f1ff',
        },
      },
    },
  },
  plugins: [],
};
