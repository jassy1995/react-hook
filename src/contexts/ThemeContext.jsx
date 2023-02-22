import { useState, createContext, useContext } from "react";

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}
export const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext)
}

export default function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true)
    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme)
    }
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )

}