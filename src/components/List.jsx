import { useMemo, useDeferredValue } from 'react';


export default function List({ input }) {

    const LIST_SIZE = 2000;
    //this hook will make the list script to wait a minute before starting the computation in case the user might not yet done with the input
    const defferedInput = useDeferredValue(input);

    const list = useMemo(() => {
        const I = [];
        for (let i = 0; i < LIST_SIZE; i++) {
            I.push(<li className='text-black' key={i}>{defferedInput}</li>)
        }
        return I
    }, [defferedInput])

    return <ul className='text-black'>{list}</ul>

}
