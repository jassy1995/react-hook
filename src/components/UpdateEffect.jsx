import { useState } from 'react';
import useUpdateEffect from '../hooks/useUpdateEffect';
import Button from './Button';

export default function UpdateEffect() {
    const [count, setCount] = useState(10)
    useUpdateEffect(() => alert(count), [count])

    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">updateEffect example</h1>
            <div className='text-black text-lg'>{count}</div>
            <Button handler={() => setCount(c => c + 1)}>increment</Button>
        </div>
    )
}
