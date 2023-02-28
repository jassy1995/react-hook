import { useState } from "react"
import Button from "./Button"
import useEffectOnce from "../hooks/useEffectOnce"

export default function EffectOnce() {
    const [count, setCount] = useState(0)

    useEffectOnce(() => alert("Hi"))

    return (
        <>
            <div className='flex flex-col space-y-4 border-t border-t-green-500'>
                <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">effect once example</h1>
                <div className="text-black font-semibold text-md">{count}</div>
                <Button handler={() => setCount(c => c + 1)}>Increment</Button>
            </div>
        </>
    )
}