import { useContext } from "react";
import { CommonContext } from "../context/context";

const useCommonState = () => {
    const { context, updateList, updateSelectedCharacter } = useContext(CommonContext) || {}
    
    return { context, updateList, updateSelectedCharacter }
}

export default useCommonState