const { commonStyles, generateDynamicStyles } = require('./tailwind.plugins');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {
      colors: { 
      },
      fontFamily: {
        "regular": ['Montserrat-Regular', 'NoToSans-Regular'],
        "medium": ['Montserrat-Medium', 'NoToSans-Medium'],
        "semi-bold": ['Montserrat-SemiBold', 'NoToSans-SemiBold'],
        "bold": ['Montserrat-Bold', 'NoToSans-Bold']
      },
      fontSize: {
        '4xs': '.5625rem',
        '3xs': '.625rem',
        '2xs': '.6875rem'
      },
    },
  },
  plugins: [ 
  ],
}

