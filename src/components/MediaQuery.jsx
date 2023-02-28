import useMediaQuery from '../hooks/useMediaQuery';

export default function MediaQuery() {
    const xxs = useMediaQuery("(min-width: 0px) and (max-width: 337px)")
    const xs = useMediaQuery("(min-width: 337px) and (max-width: 480px)")
    const sm = useMediaQuery("(min-width: 480px) and (max-width: 620px)")
    const md = useMediaQuery("(min-width: 620px) and (max-width: 768px)")
    const lg = useMediaQuery("(min-width: 768px) and (max-width: 1060px)")
    const xl = useMediaQuery("(min-width: 1060px) and (max-width: 1200px)")
    const xxl = useMediaQuery("(min-width: 1200px) and (max-width: 1700px)")
    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">media query example</h1>
            <div className={`text-black text-lg flex justify-center items-center ${xxs && 'bg-red-500'} ${xs && 'bg-green-500'} ${sm && 'bg-blue-500'} ${md && 'bg-teal-500'} ${lg && 'bg-yellow-500'} ${xl && 'bg-indigo-500'} ${xxl && 'bg-slate-500'}`}>
                <h1 className='text-black font-semibold'>{xxs ? 'xxs' : xs ? 'xs' : sm ? 'sm' : md ? 'md' : lg ? 'lg' : xl ? 'xl' : 'xxl'}</h1>
            </div>

        </div>
    )
}



