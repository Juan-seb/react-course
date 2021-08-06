import { createContext, useState } from "react";

const ThemeContext = createContext();
const initialTheme = 'light';

const ThemeProvider = ({ children }) => {


    const [theme, setTheme] = useState(initialTheme) /*Guarda el tema de la pagina */
    
    const handleTheme = (e) => {
        if (e.target.value === 'light') {
            setTheme('light')
        }else{
            setTheme('dark')
        }
        // setTheme(e.target.value) another way to update the state
        
    }; /*Change value of the state that controls the theme */
    
    const data = {theme, handleTheme}

    return(
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}

export {ThemeProvider};
export default ThemeContext;