import useLocalStorage from "../hooks/useLocalStorage"
import useUpdateLogger from "../hooks/useUpdateLogger"

export default function LocalStorage() {
    const [name, setName] = useLocalStorage("name", "")
    useUpdateLogger(name)
    return (
        <div>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">local storage example</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                className="border border-slate-300 p-2 w-48 bg-white text-black rounded-md focus:outline-none"
            />
        </div>
    )
}
