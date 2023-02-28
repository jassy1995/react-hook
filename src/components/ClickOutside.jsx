import { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import Button from "./Button";

export default function ClickOutside() {
    const [open, setOpen] = useState(false)
    const modalRef = useClickOutside(() => setOpen(false));

    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">clickoutside example</h1>
            <Button handler={() => setOpen(true)}>open</Button>
            <div className={`bg-white border border-slate-300 w-full flex justify-end ${open ? 'flex' : 'hidden'}`}>
                <div className={`w-[100px] h-[100px] transition-all  bg-green-500  ${open ? 'flex flex-col space-y-4' : 'hidden'}`} ref={modalRef}>
                    <div className="flex justify-end">
                        <button onClick={() => setOpen(false)} className='bg-red-500 text-white h-6 w-6 rounded-full'>X</button>
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="text-lg text-white font-bold">Modal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
