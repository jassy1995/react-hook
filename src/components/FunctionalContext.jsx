import { useTheme, useThemeUpdate } from "../contexts/ThemeContext"

export default function FunctionalContext() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        marging: 'auto',
        width: '200px',
    }
    return (
        <>
            <div style={themeStyles}>Functional Theme</div>
            <button className="w-32 px-2 py-1 bg-slate-100 text-black font-semibold" onClick={toggleTheme}>toggle Theme</button>
        </>
    )
}
