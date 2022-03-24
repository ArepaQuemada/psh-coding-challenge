import { Character, Crew } from "../models";

const filterByName = (list: Crew[] | Character[], type: 'crew' | 'character', value: string) => {
    let castedList: Character[] | Crew[]
    if (type === 'character') {
        castedList = list as Character[]
        return castedList.filter(ch => ch.fullname?.includes(value))
    } else {
        castedList = list as Crew[]
        return castedList.filter(c => c.fullname?.includes(value))
    }
}

export default filterByName