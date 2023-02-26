import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import Button from './Button';

export default function Fetch() {
    const [id, setId] = useState(1)
    const { loading, error, value } = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {}, [id])
    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">fetch example</h1>
            <div className='text-black text-lg'>{id}</div>
            <Button handler={() => setId(currentId => currentId + 1)}>increment id</Button>
            <div className='text-black text-lg'>Loading: {loading.toString()}</div>
            <div className='text-black text-lg font-semibold'>{JSON.stringify(error, null, 2)}</div>
            <div className='text-black text-lg font-semibold'>{JSON.stringify(value, null, 2)}</div>
        </div>
    )
}
