import { useState, useEffect } from "react";

export default function useGeolocation(options) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setDate] = useState({})

    useEffect(() => {
        const successhandler = (e) => {
            setLoading(false)
            setError(null)
            setDate(e.coords)
        }
        const errorhandler = (e) => {
            setError(e)
            setLoading(false)
        }
        navigator.geolocation.getCurrentPosition(successhandler, errorhandler, options)
        const id = navigator.geolocation.getCurrentPosition(successhandler, errorhandler, options)

        return () => navigator.geolocation.clearWatch(id)
    }, [options])


    return { loading, error, data }
}

