import { useAsync, useCommonState } from "../../hooks";
import config from "../../services/config";
import { ResponseList, Character } from "../../models/index";
import Dashboard from "../../components/dashboard";
import { useEffect } from "react";

const Characters = () => {
    const { data } = useAsync<ResponseList<Character>>({ url: config.endpoints.characters.name, method: config.endpoints.characters.method, callOnLoad: true })
    const { updateListAndType } = useCommonState()

    useEffect(() => {
        if (data?.data.data) {
            updateListAndType(data.data.data, 'character')
        }
    }, [data?.data.data, updateListAndType])

    if (data?.data.data) {

        return (
            <>
                <h1>Crew</h1>
                <Dashboard />
            </>
        )
    }

    return (
        <>
            Loading
        </>
    );
}

export default Characters;