import { Crew, Character } from "../models";

const typedList = {
    crew: (list: Crew[] | Character[]) => {
        const castedList = list as Crew[]
        return castedList.map((el) => (
            <ul key={el.name}>
                <li>{el.name} {el.role}</li>
            </ul>
        ))
    },
    character: (list: Crew[] | Character[]) => {
        const castedList = list as Character[]
        return castedList.map(el => (
            <ul key={el.firstname.concat(el.lastname)}>
                <li>{el.firstname} {el.lastname}</li>
            </ul>
        ))
    }
}

export default typedList