/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors:{
      white:{
        DEFAULT:"#fff",
        100:"F9F9F9",
        200:"F0F0F0",

      },
      blue:{
        100:"#0E98D0"
      },
      black:{
        DEFAULT:"#000",
        100:"#202020",
        200:"#141414"
      },
    },
    extend:{
      backgroundColor:{
        glass:" linear-gradient(134deg, rgba(0, 0, 0, 0.40) 0%, rgba(157, 157, 157, 0.20) 100%)"

      },
      backdropBlur:
      {
        glass:"5.264404296875px",
      },
      borderRadius:
      {
       'custom-1':'21.314px',
       'custom-2':'34.154px',
       'custom-3':'36.292px'

      }
  },
  plugins: [],
}
};
