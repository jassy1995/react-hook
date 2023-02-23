import { useState, useTransition } from "react"
function App() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])
  const [isPending, startTransition] = useTransition()
  const LIST_SIZE = 20000;

  const handleChange = (e) => {
    setInput(e.target.value)
    startTransition(() => {
      const I = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        I.push(e.target.value)
      }
      setList(I)
    })
  }
  return (
    <div className="h-screen flex justify-center items-center space-x-4 mx-auto py-4">
      <div className="flex flex-col space-y-3 w-48 break-words whitespace-nowrap">
        <input type="text" value={input} onChange={handleChange} className="bg-white border border-slate-300 py-1 px-2 text-black font-bold text-xl" />
        <div className="max-w-3xl  w-32 flex">
          {isPending ? <span className="text-black font-bold text-xl">loading</span> : list?.map((item, index) => (
            <div key={index} className="text-black">{item}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
