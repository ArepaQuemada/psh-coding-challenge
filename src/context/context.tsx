import React, { useCallback, useState } from "react"
import { Character, Crew } from "../models";

const initialState: Context = {
    list: [],
    type: 'crew',
    selectedCharacter: {
        __id: '',
        __v: '',
        firstname: '',
        lastname: ''
    },
}

type ListType = 'crew'| 'character'

export type Context = {
    list: Character[] | Crew[] | [],
    type: ListType
    selectedCharacter: Character
}



interface CommonContextInterface {
    context: Context,
    updateListAndType: (List: Character[] | Crew[], type: ListType) => void
    updateSelectedCharacter: (character: Character) => void
}

export const CommonContext = React.createContext<CommonContextInterface | null>(null)

const CommonContextProvider: React.FC = ({ children }) => {

    const [context, updateContext] = useState<Context>(initialState)

    const updateListAndType = useCallback((list: Character[] | Crew[], type: ListType) => {
        updateContext(prev => ({ ...prev, list, type }))
    }, [])

    const updateSelectedCharacter = useCallback((character: Character) => {
        updateContext(prev => ({ ...prev, selectedCharacter: character }))
    }, [])

    return (
        <>
            <CommonContext.Provider value={{ context, updateListAndType, updateSelectedCharacter }}>
                {children}
            </CommonContext.Provider>
        </>
    )
}

export default CommonContextProvider