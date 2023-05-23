module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    extend: {
      colors: {
        'primary': '#E6553B',
        'success': '#53C139',
        'c-gray': {
          DEFAULT: '#F0F0F0',
          'dark': '#808080',
        },
      },
    },
    container: {
      padding: {
        DEFAULT: '12px',
        lg: '12px',
      },
    },
    screens: {
      // 'ssm': '414px',
      'sm': '640px', // => @media (min-width: 640px) { ... }
      'md': '768px', // => @media (min-width: 768px) { ... }
      'lg': '1100px', // => @media (min-width: 1024px) { ... }
      'xl': '1320px', // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      'Squada': ['Squada One'],
      'Paytone': ['Paytone One'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}