import useGeolocation from '../hooks/useGeolocation';

export default function Geolocation() {
    const { loading, error, data: { latitude, longitude } } = useGeolocation()

    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">geolocation example</h1>
            <div className='text-black text-lg'> Loading: {loading.toString()}</div>
            <div className='text-black text-lg'> Error: {error?.message}</div>
            <div className='text-black text-lg'>latitude: <span className="font-semibold text-black mr-10">{latitude}</span>longitude: <span className="font-semibold text-black">{longitude}</span></div>
        </div>
    )
}



