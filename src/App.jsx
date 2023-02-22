import { useState } from "react";
import Button from "./components/Button";
const getInitialState = () => 4

function App() {
  // const [count, setCount] = useState(4); //same result
  const [count, setCount] = useState(() => getInitialState()); //same result

  const handleIncrement = () => setCount(prev => prev + 1)
  const handleDecrement = () => setCount(prev => prev - 1)
  return (
    <div className="h-screen  flex justify-center items-center space-x-4 mx-auto py-4">
      <div className="flex justify-center items-center space-x-4 w-[50%] h-[80%] border border-slate-300 shadow-md p-4">
        <Button handler={handleDecrement} disable={count === 0} isAllow={false}>-</Button>
        <span className="flex justify-center items-center font-semibold text-black text-2xl">{count}</span>
        <Button handler={handleIncrement} disable={count === 0} isAllow={true}>+</Button>
      </div>
    </div>
  )
}

export default App
