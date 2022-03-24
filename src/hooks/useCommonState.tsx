import { useContext } from "react";
import { CommonContext, Context } from "../context/context";

const useCommonState = () => {
    const { 
        context, 
        updateListAndType = () => { }, 
        updateSelectedCharacter = () => { }, 
        updateList = () => { }, 
        updateFilterList = () => { } 
    } = useContext(CommonContext) || {}

    const castedContext = context as Context
    
    return { 
        context: castedContext, 
        updateListAndType, 
        updateSelectedCharacter, 
        updateList, 
        updateFilterList }
}

export default useCommonState;