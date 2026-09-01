import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6E1F2E',
          dark: '#53141F',
          light: '#8A3B4A',
          soft: '#F3E3E6',
        },
        secondary: {
          DEFAULT: '#E8A2B0',
          light: '#F7D6DD',
          dark: '#D4778B',
        },
        accent: {
          DEFAULT: '#1E4D4B',
          dark: '#123230',
          light: '#2D6A5F',
          soft: '#D9EAE6',
        },
        background: {
          DEFAULT: '#FBF7F0',
          alt: '#F4EDE2',
          accent: '#F8F2EA',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(110, 31, 46, 0.18)',
        card: '0 4px 20px -6px rgba(110, 31, 46, 0.12)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
}
