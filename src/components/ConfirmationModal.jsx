import { forwardRef, useImperativeHandle, useRef } from 'react'

function ConfirmationModal({ isOpen, onClose }, ref) {
    const closeRef = useRef()
    const confirmRef = useRef()
    const denyRef = useRef()
    useImperativeHandle(ref, () => {
        return {
            focusCloseBtn: () => closeRef.current.focus(),
            focusConfirmBtn: () => confirmRef.current.focus(),
            focusDenyBtn: () => denyRef.current.focus(),
        }
    }, [])
    if (!isOpen) return null
    return (
        <div className='modal border border-slate-300 p-3 rounded-md' ref={ref}>
            <div className="close-btn flex justify-end items-end">
                <button ref={closeRef} className='close-btn text-lg text-black w-7 h-7 border border-none outline-none focus:ring-1 focus:rounded-full'>&times;</button>
            </div>
            <div className="modal-header">
                <h1 className='text-black text-lg font-bold'>Title</h1>
            </div>
            <div className="modal-body text-slate-600">
                Are you sure?
            </div>
            <div className="modal-footer flex justify-center items-center space-x-3 mt-2">
                <button ref={confirmRef} className="confirm-btn w-20 px-2 py-1 rounded-sm text-black bg-green-500 focus:ring-1 focus:ring-blue-500" onClick={onClose}>Yes</button>
                <button ref={denyRef} className="deny-btn w-20 px-2 py-1 rounded-sm text-black bg-red-500 focus:ring-1 focus:ring-blue-500" onClick={onClose}>No</button>
            </div>
        </div>
    )
}

export default forwardRef(ConfirmationModal)