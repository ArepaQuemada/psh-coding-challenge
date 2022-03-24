import { Crew, ResponseList } from "../models";
import config from "../services/config";
import useAsync from "./useAsync";


const useAsyncCrew = () => {
    const { data, doFetch, isLoading } = useAsync<ResponseList<Crew>>({
        url: config.endpoints.crew.name,
        method: config.endpoints.crew.method,
        callOnLoad: true
    });
    return { data, doFetch, isLoading }
}

export default useAsyncCrew