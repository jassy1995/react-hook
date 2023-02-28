import { useState } from 'react'
import useCopyToClipboard from "../hooks/useCopyToClipboard"

export default function CopyToClipboard() {
    const [name, setName] = useState("")
    const [copyToClipboard, { success }] = useCopyToClipboard()

    return (
        <>
            <div className='flex flex-col space-y-4 border-t border-t-green-500'>
                <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">copy to clipboard example</h1>
                <div className='flex space-x-2'>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border border-slate-300 focus:border-blue-300 w-64 h-8 bg-white outline-none text-black p-2' />
                    <button onClick={() => copyToClipboard(name)} disabled={!name} className='bg-green-100 text-green-500 w-20 px-1 rounded-md disabled:opacity-75 disabled:cursor-not-allowed'>
                        {success ? "Copied" : "Copy Text"}
                    </button>
                </div>
            </div>
        </>
    )
}
