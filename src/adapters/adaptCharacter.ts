import { Character } from "../models";

const adaptCharacter = (data: Character[]) => {
    return data.map(c => ({...c, fullname: `${c.firstname} ${c.lastname}`}))
}

export default adaptCharacter
