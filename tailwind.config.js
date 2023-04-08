const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': {
          DEFAULT: '#6366F1',
          50: '#FFFFFF',
          100: '#F9F9FE',
          200: '#D3D4FB',
          300: '#AEAFF8',
          400: '#888BF4',
          500: '#6366F1',
          600: '#3034EC',
          700: '#1317D1',
          800: '#0E119E',
          900: '#0A0C6A'
        },
        'secondary': {
          DEFAULT: '#EC4899',
          50: '#FDEEF6',
          100: '#FBDCEB',
          200: '#F8B7D7',
          300: '#F492C2',
          400: '#F06DAE',
          500: '#EC4899',
          600: '#E4187D',
          700: '#B11261',
          800: '#7F0D45',
          900: '#4C0829'
        },
        'neutral': {
          DEFAULT: '#6B7280',
          50: '#CDD0D5',
          100: '#C2C5CC',
          200: '#ACB0BA',
          300: '#969BA7',
          400: '#7F8694',
          500: '#6B7280',
          600: '#515761',
          700: '#383C43',
          800: '#1E2024',
          900: '#050506'
        },
        // To change these, use https://www.tailwindshades.com/ with https://tailwindcss.com/docs/customizing-colors or create your own custom colors.
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-product-body': theme('colors.zinc[800]'),
            '--tw-product-headings': theme('colors.zinc[900]'),
            '--tw-product-lead': theme('colors.zinc[700]'),
            '--tw-product-links': theme('colors.zinc[900]'),
            '--tw-product-bold': theme('colors.zinc[900]'),
            '--tw-product-counters': theme('colors.zinc[600]'),
            '--tw-product-bullets': theme('colors.zinc[400]'),
            '--tw-product-hr': theme('colors.zinc[300]'),
            '--tw-product-quotes': theme('colors.zinc[900]'),
            '--tw-product-quote-borders': theme('colors.zinc[300]'),
            '--tw-product-captions': theme('colors.zinc[700]'),
            '--tw-product-code': theme('colors.indigo[500]'),
            '--tw-product-pre-code': theme('colors.indigo[300]'),
            '--tw-product-pre-bg': theme('colors.gray[900]'),
            '--tw-product-th-borders': theme('colors.zinc[300]'),
            '--tw-product-td-borders': theme('colors.zinc[200]'),
            '--tw-product-invert-body': theme('colors.zinc[200]'),
            '--tw-product-invert-headings': theme('colors.white'),
            '--tw-product-invert-lead': theme('colors.zinc[300]'),
            '--tw-product-invert-links': theme('colors.indigo[400]'),
            '--tw-product-invert-bold': theme('colors.white'),
            '--tw-product-invert-counters': theme('colors.zinc[400]'),
            '--tw-product-invert-bullets': theme('colors.zinc[200]'),
            '--tw-product-invert-hr': theme('colors.zinc[500]'),
            '--tw-product-invert-quotes': theme('colors.zinc[100]'),
            '--tw-product-invert-quote-borders': theme('colors.zinc[700]'),
            '--tw-product-invert-captions': theme('colors.zinc[400]'),
            '--tw-product-invert-code': theme('colors.indigo[400]'),
            '--tw-product-invert-pre-code': theme('colors.indigo[300]'),
            '--tw-product-invert-pre-bg': theme('colors.gray[900]'),
            '--tw-product-invert-th-borders': theme('colors.zinc[100]'),
            '--tw-product-invert-td-borders': theme('colors.zinc[500]'),
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
