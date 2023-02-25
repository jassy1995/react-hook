import { useState, useTransition } from "react";
import List from "./components/List";
function App() {
  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="h-screen flex justify-center items-center space-x-4 mx-auto py-4">
      <div className="flex flex-col space-y-3 w-48 break-words whitespace-nowrap">
        <input type="text" value={input} onChange={handleChange} className="bg-white border border-slate-700 py-1 px-2 text-black font-bold text-xl" />
        <List input={input} />
      </div>
    </div>
  )
}

export default App
