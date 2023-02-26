import useLocalStorage from "./hooks/useLocalStorage";
import useUpdateLogger from "./hooks/useUpdateLogger";

function App() {
  const [name, setName] = useLocalStorage("name", "")
  useUpdateLogger(name)

  return (
    <div className="h-screen  flex justify-center items-center space-x-4 mx-auto py-4">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}
        className="border border-slate-300 p-2 w-48 bg-white text-black rounded-md focus:outline-none"
      />
    </div>
  )
}

export default App
