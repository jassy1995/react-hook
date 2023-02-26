import useAsync from '../hooks/useAsync';

export default function AsynCom() {
    const { loading, error, value } = useAsync(() => {
        return new Promise((resolve, reject) => {
            const success = true;
            setTimeout(() => {
                success ? resolve("Hi") : reject("error")
            }, 1000)
        })
    }, [])
    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">asyn example</h1>
            <div className='text-black text-lg'>Loading: {loading.toString()}</div>
            <div className='text-black text-lg font-semibold'>{error}</div>
            <div className='text-black text-lg font-semibold'>{value}</div>
        </div>
    )
}
