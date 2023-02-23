import { useState, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })
  useEffect(() => {
    inputRef.current.focus();
  })
  useEffect(() => {
    prevValue.current = name;
  })
  const focus = () => {
    inputRef.current.focus();
  }

  return (
    <div className="h-screen  flex justify-center items-center space-x-4 mx-auto py-4">
      <div className="flex flex-col space-y-4">
        <input type="text" ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} className="bg-white p-2 ring-1 ring-blue-300 outline-none border-none text-black rounded-md text-xl" />
        <span className="text-black text-xl">My name is {name} and my previous name is {prevValue.current}</span>
        <span className="text-black text-xl">I render {renderCount.current} </span>
        <button className="border border-slate-300 bg-slate-200 text-black py-1 rounded-md" onClick={focus}>focus</button>
      </div>
    </div>
  )
}

export default App
