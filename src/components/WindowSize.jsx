import useWindowSize from '../hooks/useWindowSize';

export default function WindowSize() {
    const { width, height } = useWindowSize()
    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">resize example</h1>
            <div className='text-black text-lg'>width: <span className="font-semibold text-black">{width}</span> height: <span className="font-semibold text-black">{height}</span></div>

        </div>
    )
}