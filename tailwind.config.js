import daisyui from 'daisyui'

const palette = {
  colorDodgerblue: '#2596ff',
  colorLightblue: '#A2CFFE',
  colorWhite: '#fff',
  colorGainsboro: '#525252',
  colorBlack: '#000',
  colorEmeraldGreen: '#02c262',
  colorScarletRed: '#eb4034',
  colorVioletPurple: '#9370DB',
  colorSunshineYellow: '#fcffc7',
  colorGoldenrodOrange: '#fcdb44',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { // change theme here
    colors: {
      mainColor: palette.colorLightblue,
      subColor: palette.colorBlack,
      primaryColor: palette.colorWhite,
      disableColor: palette.colorGainsboro,
      checkBoxColor: palette.colorEmeraldGreen,
      errorColor: palette.colorScarletRed,
    },
    screens: {
      sm: '640px',
      md: '768px',
      twoCards: '950px',
      lg: '1024px',
      xl: '1280px',
      threeCards: '1400px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    daisyui,
  ],
  daisyui: {
    // darkTheme: false,
    themes: [
      {
        light: {
          "base-100": "#e8e8e8",
          fontFamily: 'Quenda',
        },
      },
      {
        dark: {
          "base-100": "#383838",
          fontFamily: 'Quenda',
        },
      },
    ],
  },
}
