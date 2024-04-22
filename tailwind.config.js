import daisyui from 'daisyui'
import plugin from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin,
    daisyui,
  ],
  daisyui: {
    //darkTheme: false,
    themes: [
      {
        light: {
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          fontFamily: 'Quenda'
        },
      },
      {
        dark: {
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#383838",
          fontFamily: 'Quenda'
        },
      },
    ],
  },
}
