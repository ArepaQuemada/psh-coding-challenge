import config from "../services/config"
import useAsync from "./useAsync"
import { Quotes, ResponseData } from "../models";

const useAsyncQuotes = (id: string) => {
    const { data, isLoading, doFetch } = useAsync<ResponseData<Quotes>>({
        url: `${config.endpoints.quotes.name}/${id}`,
        method: config.endpoints.quotes.method,
        callOnLoad: true
    })
    return { data, isLoading, doFetch }
}

export default useAsyncQuotes