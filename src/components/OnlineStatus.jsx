import useOnlineStatus from "../hooks/useOnlineStatus"

export default function OnlineStatus() {
    const online = useOnlineStatus()

    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">online status example</h1>
            <div className="text-black">{online.toString()}</div>
        </div>
    )
}