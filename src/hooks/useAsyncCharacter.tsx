import { useAsync } from "./";
import { ResponseList, Character } from "./../models/index";
import config from "../services/config";

const useAsyncCharacter = () => {
    const { data, doFetch, isLoading } = useAsync<ResponseList<Character>>({
        url: config.endpoints.characters.name,
        method: config.endpoints.characters.method,
        callOnLoad: true
    })

    return { data, doFetch, isLoading }
}

export default useAsyncCharacter