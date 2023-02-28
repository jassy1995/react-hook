import useStateWithValidator from '../hooks/useStateWithValidator';
import Input from './Input';

export default function StateWithValidator() {
    const [name, setName, isValid] = useStateWithValidator((name) => name.length > 5, "")

    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">input validator example</h1>
            <div className='text-black text-lg'> Valid: {isValid.toString()}</div>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}