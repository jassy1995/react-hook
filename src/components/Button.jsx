

export default function Button({ handler, children }) {
    return (
        <button onClick={handler} className="border border-slate-300 w-32 rounded-md px-2 py-1 bg-slate-100 text-black">{children}</button>
    )
}
