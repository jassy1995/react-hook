import useArray from "../hooks/useArray";
import Button from "./Button";

export default function ArrayCom() {
    const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5, 6])
    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">updateEffect example</h1>
            <div className='text-black text-lg'>{array.join(", ")}</div>
            <div className="flex flex-wrap space-x-3">
                <Button handler={() => push(7)}>Add 7</Button>
                <Button handler={() => update(1, 9)}>change second element to 9</Button>
                <Button handler={() => remove(1)}>remove second element</Button>
                <Button handler={() => filter((n) => n < 3)}>keep number less than 4</Button>
                <Button handler={() => set([1, 2])}>set to 1, 2</Button>
                <Button handler={() => clear(7)}>delete all the element</Button>
            </div>
        </div>
    )
}
