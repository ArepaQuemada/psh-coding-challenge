import { Crew, Character } from "../../models";
import { useCommonState } from "../../hooks";
import './index.scss'

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

const Dashboard = () => {
    const { context } = useCommonState()

    return (
        <>
            <section className="dashboard">
                <h1>Dashboard</h1>
                {typedList[context.type](context.list)}
            </section>
        </>
    )
}

export default Dashboard;