import { useState, useMemo, useCallback } from "react";
import { List } from "./components/List";
function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const getItems = useCallback((increment) => generateItems(number, increment), [number]);
  const theme = useMemo(() => ({ backgroundColor: dark ? '#333' : '#FFF', color: dark ? '#FFF' : '#333' }), [dark])

  return (
    <div className="h-screen  flex justify-center items-center space-x-4 mx-auto py-4">
      <div className="flex flex-col space-y-4">
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} className="text-black text-xl p-2 bg-white rounded-md border border-slate-300" />
        <ul style={theme} className='px-1 rounded-md ring-1 ring-slate-300'>
          <List getItems={getItems} />
        </ul>
        <button onClick={() => setDark(prevDark => !prevDark)} className="text-black border border-slate-300 px-2 py-1 rounded-md">change Theme</button>
      </div>
    </div>
  )
}

export default App

const generateItems = (num, increment) => {
  return [num, num + increment, num + increment + increment]
}