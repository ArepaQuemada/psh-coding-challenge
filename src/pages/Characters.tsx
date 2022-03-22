import { useAsync } from "../hooks";
import config from "../services/config";
import { Character } from "../models/index";

const Characters = () => {
    const { data } = useAsync<Character>({ url: config.endpoints.characters.name, method: config.endpoints.characters.method, callOnLoad: true })
    return (  
        <>
            <h1>Characters</h1>
        </>
    );
}

export default Characters;