import { AxiosResponse } from "axios";
import { useState, useEffect, useCallback, useRef } from "react"
import axios from "../services/axios";
import errors from "../pages/errors";
import { useNavigate } from "react-router-dom";

interface IUseAsync {
    url: string
    method: 'get'
    callOnLoad?: boolean,
    body?: any
}

function useAsync<T>({ url, method, callOnLoad }: IUseAsync) {
    const [data, setData] = useState<AxiosResponse<T>>()
    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(false)
    let mounted = useRef(true)

    const doFetch = useCallback(async (abortController) => {
        if (!mounted) {
            return
        }
        try {
            setLoading(true)
            const response = await axios[method]<T>(url, {
                signal: abortController.signal,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
            setData(response)
        } catch (err) {
            if (abortController.signal.aborted) {
                console.log('aborted async task')
            } else {
                console.error(err)
                console.log(data)
                const toRedirectIfError = errors[data?.status ?? 'default']
                if (toRedirectIfError) {
                    navigate(toRedirectIfError)
                }
            }
        } finally {
            setLoading(false)
        }
    }, [data?.status, method, navigate, url])

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

    return { data, doFetch, isLoading }
}

export default useAsync