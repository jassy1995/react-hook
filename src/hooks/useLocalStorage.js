// import { useState, useEffect, useCallback, useDebugValue } from 'react'

// export const useLocalStorage = (key, defaultValue) => {
//     const [value, setValue] = useState(() => null);
//     useDebugValue(key, value) // to show local storage data from dev tools
//     // useDebugValue(value, (v) => getValueSlowly(v)) only run the function in the dev tools
//     useEffect(() => { }, [key, value, localStorage])

//     const remove = useCallback(() => { }, [])

//     return [value, setValue, remove]
// }

// const getValueSlowly = (value) => {
//     for (let i = 0; i < 300000000; i++) { }
//     return value
// }