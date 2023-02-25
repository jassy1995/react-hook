import { useState } from "react";
// import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  // const [firstName, setFirstName] = useLocalStorage("firstName","Joseph")
  const [firstName, setFirstName] = useState("Joseph")
  const [lastName, setLastName] = useState("Oyetunde")
  return (
    <div className="h-screen  flex justify-center items-center space-x-4 mx-auto py-4">
      <div className="flex flex-col space-y-2 items-center">
        <div className="flex space-x-3 items-center">
          <span className="text-black text-md">First name:</span>
          <input type="text" className="border border-slate-300 p-2 w-48 bg-white text-black rounded-md focus:outline-none"
            value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="flex space-x-3 items-center">
          <span className="text-black text-md">Last name:</span>
          <input type="text" className="border border-slate-300 p-2 w-48 bg-white text-black rounded-md focus:outline-none"
            value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default App
