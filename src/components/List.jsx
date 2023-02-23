import { useState, useEffect } from 'react';

export const List = ({ getItems }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(1))
        console.log('updating')
    }, [getItems]);

    return items.map(item => <li key={item} className="flex justify-center items-center font-semibold text-xl first:text-red-400 last:text-blue-500 first:justify-start first:items-center last:justify-end last:items-end">{item}</li>)
}
