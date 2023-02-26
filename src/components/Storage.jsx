import { useSessionStorage, useLocalStorage } from "../hooks/useStore";
import Button from "./Button";


export default function Storage() {
    const [name, setName, removeName] = useSessionStorage("name", "Babatunde")
    const [age, setAge, removeAge] = useLocalStorage("age", 28)

    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">storage example</h1>
            <div className='text-black text-lg'>name: <span className="font-semibold text-black">{name}</span> age: <span className="font-semibold text-black">{age}</span></div>
            <div className="flex flex-wrap space-x-3">
                <Button handler={() => setName('Joseph')}>set name</Button>
                <Button handler={() => setAge(29)}>set age</Button>
                <Button handler={removeName}>remove name</Button>
                <Button handler={removeAge}>remove age</Button>
            </div>
        </div>
    )
}
