import { useState, useRef } from "react";
import ConfirmationModal from "./components/ConfirmationModal";
import CustomeInput from "./components/CustomeInput";

function App() {
  const [value, setValue] = useState("red")
  const [open, setOpen] = useState(false)
  const inputRef = useRef()
  const modalRef = useRef()
  return (
    <div className="h-screen  flex justify-center items-center space-x-4 mx-auto py-4">
      <div className="flex flex-col space-y-2 items-center">
        <div className="flex flex-col space-y-3 items-center">
          <CustomeInput
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => inputRef.current.focus()} className="border border-slate-300 bg-slate-100 px-2 py-1 w-32 rounded-sm text-black">Focus</button>
          <div className="border-t" />
          <div className="flex flex-wrap items-center mt-3 space-x-3 space-y-3">
            <button onClick={() => setOpen(true)} className="border border-slate-300 bg-slate-100 px-2 py-1 w-32 rounded-sm text-black">open</button>
            <button onClick={() => modalRef.current.focusCloseBtn()} className="border border-slate-300 bg-slate-100 px-2 py-1 w-32 rounded-sm text-black">focus close</button>
            <button onClick={() => modalRef.current.focusConfirmBtn()} className="border border-slate-300 bg-slate-100 px-2 py-1 w-32 rounded-sm text-black">focus confirm</button>
            <button onClick={() => modalRef.current.focusDenyBtn()} className="border border-slate-300 bg-slate-100 px-2 py-1 w-32 rounded-sm text-black">focus deny</button>
          </div>
          <ConfirmationModal
            ref={modalRef}
            isOpen={open}
            onClose={() => setOpen(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default App
