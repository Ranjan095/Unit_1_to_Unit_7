
import React from 'react';
import { useState } from 'react';

export let ThemeContext = React.createContext();

export default function ThemeProvider({ children }) {
    let [theme,setTheme]=useState('light')

    function toggle(){
        setTheme(theme=='light'?'Dark':'light')
    }
   
    

    return (
        <ThemeContext.Provider value={{theme,toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}



