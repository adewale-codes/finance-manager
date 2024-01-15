/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'modal': "url('./app/assets/modal.png')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          100: '#191919',
          200: '#299D91',
          300: '#F4F5F7',
          400: '#299D91',
          500: '#BFE2DE',
          600: '#878787',
          700: '#0ABF53'
        },
        secondary: {
          100: '#262626',
          200: '#2B2B2B',
          300: '#BABABA',
          400: '#4F4E6A',
        },
        grays: {
          100: '#f8f9fa',
          200: '#E8E8E8',
          300: '#9F9F9F',
          400: '#878787',
          500: '#525256',
          600: '#F3F3F3',
          700: '#D1D1D1',
          800: '#F4F4F4',
          900: '#666666'
        }
      },
      spacing: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
      },
      fontFamily: {
        body: ['var(--font-anderson-grotesk)'],
        heading: ['var(--font-neue-machina)']
      },
      keyframes: {
        'fly-in-bottom': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fly-in-bottom': 'fly-in-bottom 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
