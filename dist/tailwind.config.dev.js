"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 24.552px rgba(255, 255, 255, 0.3);'
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%),url("/public/bg.svg")'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      light: '#EFEEE0',
      dark: '#1D2123',
      secondary: '#FACD66',
      primary: '#A4C7C6',
      darkAlt: '#1A1E1F',
      alt: '#A4C7C6',
      backgroundColor: '#1E1E1E',
      navColor: 'rgba(239, 238, 224, 0.25)',
      card: '#609EAF'
    }
  },
  plugins: []
};