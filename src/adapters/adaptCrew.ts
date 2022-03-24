import { Crew } from "../models";

const adaptCrew = (data: Crew[]) => {
    return data.map(c => ({...c, fullname: c.name}))
}

export default adaptCrew
