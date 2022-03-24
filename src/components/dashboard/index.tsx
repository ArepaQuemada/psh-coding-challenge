import List from "../list";
import './index.scss'
import { useCommonState } from "../../hooks";
import { sort } from "../../utilities";

const Dashboard = () => {
    const { context, updateList } = useCommonState()

    const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sortedList = context.list.sort((a, b) => {
            return sort[e.target.value](a.fullname, b.fullname)
        })
        updateList(sortedList)
    }

    return (
        <>
            <section className="dashboard">
                <h1>Dashboard</h1>
                <fieldset>
                    <legend>Ordenar por</legend>
                    <input type='radio' id='name' name='sort_by' value='name' onChange={onChangeRadio}/>
                    <label htmlFor='name'>Nombre</label>
                    <input type='radio' id='lastname' name='sort_by' value='lastname' onChange={onChangeRadio}/>
                    <label htmlFor='lastname'>Apellido</label>
                </fieldset>
                <List />
            </section>
        </>
    )
}

export default Dashboard