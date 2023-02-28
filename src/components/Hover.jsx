import { useRef } from "react"
import useHover from "../hooks/useHover"

export default function Hover() {
    const elementRef = useRef()
    const hovered = useHover(elementRef)

    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">hover example</h1>
            <div className={`w-[100px] h-[100px] ${hovered ? 'bg-blue-500' : 'bg-red-500'}`} ref={elementRef} />
        </div>
    )
}