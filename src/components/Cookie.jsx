import useCookie from "../hooks/useCookie"
import Button from "./Button"

export default function Cookie() {
    const [value, update, remove] = useCookie("name", "Babatunde")

    return (
        <>
            <div className='flex flex-col space-y-4 border-t border-t-green-500'>
                <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">cookie example</h1>
                <div className="text-black">{value}</div>
                <Button handler={() => update("Joseph")}>Change Name To Joseph</Button>
                <Button handler={remove}>Delete Name</Button>
            </div>
        </>
    )
}