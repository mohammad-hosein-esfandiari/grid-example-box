import { useState } from "react"


interface ThemeType {
    text: string,
    secondary: string,
    hover:string,
    background1: string,
    background2: string,
    boxBg: string, 

}

type Mode = "light" | "dark"

// type Theme = Record<Mode,ThemeType>

const lightColors:ThemeType = {
    text: '#272834',
    secondary: '#7f7f7f',
    hover:"#3a7bfd",
    background1: '#D1D3E2',
    background2:"linear-gradient(90deg, hsla(230, 59%, 25%, 1) 0%, hsla(359, 73%, 39%, 1) 47%, hsla(32, 97%, 59%, 1) 100%)",
    boxBg:"#D1D3E2",

}

const darkColors:ThemeType = {
    text: '#a6abd8',
    secondary: '#7f7f7f',
    hover:"#3a7bfd",
    background1: 'hsl(235, 21%, 11%)',
    background2:"linear-gradient(90deg, hsla(230, 59%, 25%, 1) 0%, hsla(359, 73%, 39%, 1) 47%, hsla(32, 97%, 59%, 1) 100%)",
    boxBg:"hsl(234.29deg 22.11% 18.63%)",

}


export const usetheme = () =>{
    
    const [mode,setMode] = useState<Mode>("light")
    const theme = localStorage.getItem("theme")
    
    const toggleTheme = () =>{
        setMode(mode === "light" ? "dark" : "light")
        localStorage.setItem("theme",theme == "light" ? "dark" : "light")
    }
    const colors:ThemeType = theme === "light" ? lightColors : darkColors




      return {toggleTheme,theme,colors}

}
