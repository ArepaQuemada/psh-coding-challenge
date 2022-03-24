import { useContext } from "react";
import { CommonContext, Context } from "../context/context";

const useCommonState = () => {
    const { context, updateListAndType = () => { }, updateSelectedCharacter = () => { }, updateList = () => {} } = useContext(CommonContext) || {}
    const castedContext = context as Context
    return { context: castedContext, updateListAndType, updateSelectedCharacter, updateList }
}

export default useCommonState;