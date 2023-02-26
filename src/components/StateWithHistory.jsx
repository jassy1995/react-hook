import { useState } from "react";
import Button from "./Button";
import useStateWithHistory from "../hooks/useStateWithHistory";

export default function Previous() {
    const [count, setCount, { history, pointer, back, forward, go }] = useStateWithHistory(1)
    const [name, setName] = useState("Babatunde")
    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">state with history example</h1>
            <div className='text-black text-lg'>{count}</div>
            <div className='text-black text-lg'>{history.join(", ")}</div>
            <div className='text-black text-lg'>pointer: <span className="font-semibold text-black">{pointer}</span></div>
            <div className='text-black text-lg'>{name}</div>
            <div className="flex flex-wrap space-x-3">
                <Button handler={() => setCount(currentCount => currentCount * 2)}>double</Button>
                <Button handler={() => setCount(currentCount => currentCount + 1)}>increment</Button>
                <Button handler={back}>back</Button>
                <Button handler={forward}>forward</Button>
                <Button handler={() => go(2)}>go to index 2</Button>
                <Button handler={() => setName('Joseph')}>change name</Button>
            </div>
        </div>
    )
}
