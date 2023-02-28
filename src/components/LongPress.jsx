import { useRef } from "react"
import useLongPress from '../hooks/useLongPress';

export default function LongPress() {
    const elementRef = useRef()
    useLongPress(elementRef, () => alert("Long Press"))

    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">long press example</h1>
            <div className={`w-[100px] h-[100px] bg-red-500`} ref={elementRef} />
        </div>
    )
}