import { useState } from "react";
import Button from "./Button";
import usePrevious from '../hooks/usePrevious';

export default function Previous() {
    const [count, setCount] = useState(10);
    const [name, setName] = useState("Babatunde");
    const previousCount = usePrevious(count)
    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">previous value example</h1>
            <div className='text-black text-lg'>previous count: <span className="font-semibold text-black">{previousCount}</span> current count: <span className="font-semibold text-black">{count}</span></div>
            <div className='text-black text-lg'>{name}</div>
            <div className="flex flex-wrap space-x-3">
                <Button handler={() => setCount(currentCount => currentCount + 1)}>increment</Button>
                <Button handler={() => setName('Joseph')}>change name</Button>
            </div>
        </div>
    )
}
