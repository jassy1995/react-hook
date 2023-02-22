
export default function Button({ handler, children }) {
    return (
        <button onClick={handler} className='border border-slate-300 bg-slate-100 py-1 px-2 w-32 text-black'>{children}</button>
    )
}
