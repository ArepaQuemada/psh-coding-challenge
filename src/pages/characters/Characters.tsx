import { useAsyncCharacter, useCommonState } from "../../hooks";
import Dashboard from "../../components/dashboard";
import { useEffect } from "react";
import { adaptCharacter } from "../../adapters";

const Characters = () => {
    const { data } = useAsyncCharacter()
    const { updateListAndType } = useCommonState()
    useEffect(() => {
        if (data?.data.data) {
            const adaptedCharacter = adaptCharacter(data.data.data)
            updateListAndType(adaptedCharacter, 'character')
        }
    }, [data?.data.data, updateListAndType])

    if (data?.data.data) {

        return (
            <>
                <h1>Characters</h1>
                <hr className="divider" />
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