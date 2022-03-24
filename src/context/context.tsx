import React, { useCallback, useState } from "react"
import { Character, Crew } from "../models";

const initialState: Context = {
    list: [],
    filterList: [],
    type: 'crew',
    selectedCharacter: {
        __id: '',
        __v: '',
        firstname: '',
        lastname: ''
    },
}

type ListType = 'crew' | 'character'

export type Context = {
    list: Character[] | Crew[] | [],
    filterList: Character[] | Crew[] | [],
    type: ListType
    selectedCharacter?: Character
}



interface CommonContextInterface {
    context: Context,
    updateListAndType: (List: Character[] | Crew[], type: ListType) => void
    updateSelectedCharacter: (character: Character) => void
    updateList: (List: Character[] | Crew[]) => void
    updateFilterList: (List: Character[] | Crew[]) => void
}

interface ICommonContextProvider {
    customContext?: Context,
    spyOnupdateFilterList?: (List: Character[] | Crew[]) => void

}

export const CommonContext = React.createContext<CommonContextInterface | null>(null)

const CommonContextProvider: React.FC<ICommonContextProvider> = ({ customContext, spyOnupdateFilterList, children }) => {

    const [context, updateContext] = useState<Context>(initialState)

    const updateListAndType = useCallback((list: Character[] | Crew[], type: ListType) => {
        updateContext(prev => ({ ...prev, list, type }))
    }, [])

    const updateSelectedCharacter = useCallback((character: Character) => {
        updateContext(prev => ({ ...prev, selectedCharacter: character }))
    }, [])

    const updateList = useCallback((list: Character[] | Crew[]) => {
        updateContext(prev => ({ ...prev, list }))
    }, [])

    const updateFilterList = useCallback((list: Character[] | Crew[]) => {
        updateContext(prev => ({ ...prev, filterList: list }))
    }, [])


    return (
        <>
            <CommonContext.Provider value={{
                context: customContext ?? context,
                updateListAndType,
                updateSelectedCharacter,
                updateList,
                updateFilterList: spyOnupdateFilterList ?? updateFilterList
            }}>
                {children}
            </CommonContext.Provider>
        </>
    )
}

export default CommonContextProvider