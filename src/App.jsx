import { useState, useMemo } from "react"
function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => slowFunction(number), [number]);
  const themeStyles = useMemo(() => ({ backgroundColor: dark ? 'black' : 'white', color: dark ? 'white' : 'black' }), [dark])

  return (
    <div className="h-screen  flex justify-center items-center space-x-4 mx-auto py-4">
      <div className="flex flex-col space-y-4">
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} className="text-black text-xl p-2 bg-white rounded-md border border-slate-300" />
        <div className="border border-slate-300 px-2 py-1 text-2xl rounded-md" style={themeStyles}>{doubleNumber}</div>
        <button onClick={() => setDark(prevDark => !prevDark)} className="text-black border border-slate-300 px-2 py-1 rounded-md">change Theme</button>
      </div>
    </div>
  )
}

export default App

const slowFunction = (num) => {
  console.log('running slow function')
  for (let i = 0; i <= 1000000000; i++) { }
  return num * 2
}