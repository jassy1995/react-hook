import { useState } from "react"
import useDebugInformation from "../hooks/useDebugInformation"
import useToggle from "../hooks/useToggle"
import Button from "./Button"

export default function DebugInformation() {
    const [boolean, toggle] = useToggle(false)
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='flex flex-col space-y-4 border-t border-t-green-500'>
                <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">debug info example</h1>
                <ChildComponent boolean={boolean} count={count} />
                <Button handler={toggle}>Toggle</Button>
                <Button handler={() => setCount(prevCount => prevCount + 1)}>
                    Increment
                </Button>
            </div>
        </>
    )
}

function ChildComponent(props) {
    const info = useDebugInformation("ChildComponent", props)

    return (
        <>
            <div className="text-black">{props.boolean.toString()}</div>
            <div className="text-black">{props.count}</div>
            <div className="text-black">{JSON.stringify(info, null, 2)}</div>
        </>
    )
}