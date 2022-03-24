import List from "../list";
import './index.scss'
import { useCommonState } from "../../hooks";
import { sort, filterByName } from "../../utilities";
import { useEffect } from "react";

const Dashboard = () => {
    const { context, updateFilterList } = useCommonState()

    useEffect(() => {
        return () => {
            updateFilterList([])
        }
    }, [updateFilterList])

    const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sortedList = context.list.sort((a, b) => {
            return sort[e.target.value](a.fullname, b.fullname)
        })
        updateFilterList(sortedList)
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filtered = filterByName(context.list, context.type, e.target.value)
        if (filtered) {
            return updateFilterList(filtered)
        }
        updateFilterList(context.list)
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

                    <legend>Buscar por nombre completo</legend>
                    <input type='text' name='fullname-searc' onChange={onChangeInput}/>
                </fieldset>
                <List />
            </section>
        </>
    )
}

export default Dashboard