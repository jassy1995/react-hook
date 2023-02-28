import { useRef } from 'react'
import useOnScreen from '../hooks/useOnScreen';

export default function OnScreen() {
    const headerTwoRef = useRef();
    const visible = useOnScreen(headerTwoRef, "-100px")
    return (
        <div className='flex flex-col space-y-4 border-t border-t-green-500'>
            <h1 className="text-slate-600 text-lg underline underline-offset-8 italic mb-3">onscreen example</h1>
            <h1 className='font-semibold text-black text-lg'>Header 1</h1>
            <div className='text-black'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
            </div>
            <h1 ref={headerTwoRef} className='font-semibold text-black text-lg'>Header 2 {visible && "(visible)"}</h1>
            <div className='text-black'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus quae ducimus sapiente voluptas unde incidunt neque, enim cumque nihil atque est aliquam quo voluptate aspernatur illum. Quod, placeat magnam?
            </div>
        </div>
    )
}