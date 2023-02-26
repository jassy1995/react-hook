import { useState } from 'react';
import useTimeout from '../hooks/useTimeout';
import Button from "./Button"

export default function Timeout() {
    const [count, setCount] = useState(10)
    const { clear, reset } = useTimeout(() => setCount(0), 1000)

    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">timeout example</h1>
            <div className='text-black text-lg'>{count}</div>
            <div className="flex space-x-3">
                <Button handler={() => setCount(c => c + 1)}>increment</Button>
                <Button handler={clear}>clear timeout</Button>
                <Button handler={reset}>reset timeout</Button>
            </div>
        </div>
    )
}
