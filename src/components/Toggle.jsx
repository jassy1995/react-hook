import useToggle from '../hooks/useToggle';
import Button from "./Button"

export default function Toggle() {

    const [value, toggleValue] = useToggle(false)

    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">toggle example</h1>
            <div className='text-black text-lg'>{value.toString()}</div>
            <div className="flex space-x-3">
                <Button handler={toggleValue}>Toggle</Button>
                <Button handler={() => toggleValue(true)}>Make True</Button>
                <Button handler={() => toggleValue(false)}>Make False</Button>
            </div>
        </div>
    )
}
