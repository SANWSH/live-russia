/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '4xl': '1952px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '4xl': '1952px'
    },
    extend: {
      scale: {
        200: '4'
      },
      background: {
        'radial-gradient': 'radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)'
      },
      boxShadow: {
        'btn-sm': '0 0 1rem .2rem'
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
        upper: '10000'
      },
      spacing: {
        '8xl': '95rem',
        38: '9.5rem',
        64: '16.25rem',
        66: '16.5rem',
        68: '16.75rem',
        70: '17rem',
        72: '17.25rem',
        74: '17.5rem',
        78: '18rem',
        79: '19rem',
        xl: '26.25rem',
        lg: '22rem',
        md: '17.45rem',
        sm: '15.25rem',
        video: '18.2rem',
        view: 'calc((912 / 16) * 1rem)'
      },
      fontSize: {
        100: '1em /*16px*/',
        120: '1.25em /*20px*/',
        150: '1.5em /*24px*/',
        170: '1.75em /*28px*/',
        200: '2em /*32px*/',
        220: '2.25em /*36px*/',
        250: '2.5em /*40px*/',
        270: '2.75em /*44px*/',
        300: '3em /*48px*/',
        350: '3.5em /*56px*/',
        370: '3.75em /*60px*/'
      },
      fontFamily: {
        roboto: ['Roboto Flex'],
        'roboto-italic': ['Roboto Flex Italic']
      },
      colors: {
        BASE_BACKGROUND: '#00092E',
        BASE_BUTTON: '#FFC700',
        HEADER_GRADIENT_COLOR_1: '#00133780',
        HEADER_GRADIENT_COLOR_2: '#089EB680',
        CYAN: '#49F4FF',
        COUNTER: '#242D4555',
        COUNTER_BORDER: '#FFFFFF10'
      }
    }
  },
  plugins: []
}
