import useRenderCount from "../hooks/useRenderCount"
import useToggle from "../hooks/useToggle"
import Button from "./Button"

export default function RenderCount() {
    const [boolean, toggle] = useToggle(false)

    const renderCount = useRenderCount()

    return (
        <>
            <div className='flex flex-col space-y-4 border-t border-t-green-500'>
                <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">render count example</h1>
                <div className="text-black">{boolean.toString()}</div>
                <div className="text-black">{renderCount}</div>
                <Button handler={toggle}>Toggle</Button>
            </div>
        </>
    )
}