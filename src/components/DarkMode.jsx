import useDarkMode from "../hooks/useDarkMode"

export default function DarkMode() {
    const [darkMode, setDarkMode] = useDarkMode()

    return (
        <div className="h-screen">
            <button className={`border border-slate-300 w-32 outline-none text-black rounded-md px-2 py-1 bg-none
            ${darkMode ? 'text-white' : 'text-black'}`} onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}>
                Toggle Dark Mode
            </button>
        </div>
    )
}