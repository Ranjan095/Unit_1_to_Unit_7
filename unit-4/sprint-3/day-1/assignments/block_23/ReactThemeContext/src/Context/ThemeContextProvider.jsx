import React, { useState } from 'react'
import App from '../App'
import { createContext } from 'react'

export let ThemeContext=createContext();

export default function ThemeContextProvider() {
    let [isDarkTheme,setIsDarkTheme]=useState(false)

  return (
    <div>
        <ThemeContext.Provider value={{isDarkTheme,setIsDarkTheme}}>
          <App/>
        </ThemeContext.Provider>
    </div>
      
  )
}
