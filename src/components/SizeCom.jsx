import { useRef } from 'react';
import useSize from '../hooks/useSize';

export default function SizeCom() {
    const ref = useRef()
    const size = useSize(ref)
    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">size example</h1>
            <div className='text-black text-lg'>{JSON.stringify(size)}</div>
            <textarea ref={ref} className='text-black text-lg font-semibold border border-slate-300  h-12'></textarea>
        </div>
    )
}
