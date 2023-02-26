import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import Button from "./Button"

export default function Debounce() {
    const [count, setCount] = useState(10)
    useDebounce(() => alert(count), 1000, [count]) //mostly use for searching without onclick event, so alert will be replaced with search function

    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">debounce example</h1>
            <div className='text-black text-lg'>{count}</div>
            <Button handler={() => setCount(c => c + 1)}>increment</Button>
        </div>
    )
}
