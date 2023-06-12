/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ignite: {
          500: '#129e57',
        },

        gray: {
          100: '#e1e1e6',
          300: '#8D8D99',
          600: '#32323b',
          800: '#202024',
          900: '#121214',
        },

        yellow: {
          500: '#f7dd43',
          600: '#e5cd3d',
        },
      },

      backgroundImage: {
        hero: 'url(/bg-effects.png)',
      },
    },
    screens: {
      xs: '520px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}
