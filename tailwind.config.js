
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        todoBg:"linear-gradient(90deg, hsla(230, 59%, 25%, 1) 0%, hsla(359, 73%, 39%, 1) 47%, hsla(32, 97%, 59%, 1) 100%)",
      },
      backgroundColor:{
        todoMainBg:"hsl(235, 21%, 11%)",
        boxBg:"hsl(234.29deg 22.11% 18.63%)",
        hoverbg:"var(--hover-bg)"
      },
      textColor:{
        textColor:"var(--text-color)"
      }
      
    },
    screens:{
      sss:"320px",
      xs:"480px",
      ss:"620px",
      sm:"768px",
      md:"1060px",
      lg:"1200px",
      hlg:"1440px",
      xl:"1700px"
    }
  },
  plugins: [],
}
