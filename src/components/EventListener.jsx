import { useState } from 'react'
import useEventListener from '../hooks/useEventListener';

export default function EventListener() {
    const [key, setKey] = useState("");
    useEventListener('keydown', (e) => { setKey(e.key) })
    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">eventlistener example</h1>
            <div className='text-black'>last key: <span className='text-black font-semibold'>{key}</span></div>
        </div>
    )
}