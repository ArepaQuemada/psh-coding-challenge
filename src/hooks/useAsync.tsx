import { AxiosResponse } from "axios";
import { useState, useEffect, useCallback, useRef } from "react"
import axios from "../services/axios";

interface IUseAsync {
    url: string
    method: 'get'
    callOnLoad?: boolean,
    body?: any
}

function useAsync<T>( { url, method, callOnLoad }: IUseAsync) {
    const [data, setData] = useState<AxiosResponse<T>>()
    const [isLoading, setLoading] = useState(false)
    let mounted = useRef(true)

    const doFetch = useCallback(async(abortController) => {
        if (!mounted) {
            return
        }
        try {
            setLoading(true)
            const response = await axios[method]<T>(url, {
                signal: abortController.signal
            })
            setData(response)
        } catch(err) {
            if (abortController.signal.aborted) {
                console.log('aborted async task')
            }
        } finally {
            setLoading(false)
        }
    }, [method, url])

    useEffect(() => {
        const abortController = new AbortController()
        if (callOnLoad) {
            doFetch(abortController)
        }
        return () => {
            mounted.current = false
            abortController.abort()
        }
    }, [callOnLoad, doFetch])

    return {data, doFetch, isLoading}
}

export default useAsync