/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray: {
          "900": '#0D0D0D',
          "800": '#1A1A1A',
          "700": '#262626',
          "600": '#3D3D4D',
          "500": '#808080',
          "100": '#A8A8B3',
          "50": '#F2F2FA'
      },
        green: {
          "500": '#8BCF21',
        },
        blue: {
          "500": '#00D2FF'
        }
      },
      fontFamily: {
        get_schwifty: ["Get_Schwifty", "sans-serif"]
      }
    },
  },
  plugins: [],
}
