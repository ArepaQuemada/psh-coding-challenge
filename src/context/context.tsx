import React, { useState } from "react"
import { Character, Crew } from "../models";

const initialState: Context = {
    list: [],
    selectedCharacter: {
        __id: '',
        __v: '',
        firstname: '',
        lastname: ''
    },
}

type Context = {
    list: Character[] | Crew[] | [],
    selectedCharacter: Character
}

interface CommonContextInterface {
    context: Context,
    updateList: (List: Character[] | Crew[]) => void
    updateSelectedCharacter: (character: Character) => void
}

export const CommonContext = React.createContext<CommonContextInterface | null>(null)

const CommonContextProvider: React.FC = ({ children }) => {

    const [context, updateContext] = useState<Context>(initialState)

    const updateList = (list: Character[] | Crew[]) => {
        updateContext(prev => ({...prev, list: list}))
    }

    const updateSelectedCharacter = (character: Character) => {
        updateContext(prev => ({...prev, selectedCharacter: character}))
    }

    return (
        <>
            <CommonContext.Provider value={{ context, updateList, updateSelectedCharacter }}>
                {children}
            </CommonContext.Provider>
        </>
    )    
}

export default CommonContextProvider