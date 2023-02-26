import { forwardRef } from 'react'

function CustomeInput({ ...props }, ref) {
    return (
        <input ref={ref} {...props} type="text" className="border border-slate-300 p-2 w-48 bg-white text-black rounded-md focus:outline-none"
        />
    )
}

export default forwardRef(CustomeInput)