import { useAsyncCrew, useCommonState } from "../../hooks";
import Dashboard from "../../components/dashboard";
import { useEffect, useState } from "react";
import adaptCrew from "../../adapters/adaptCrew";
import { generateRandomId } from "../../utilities";
import { Crew } from "../../models";

const CrewPage = () => {
    const { data } = useAsyncCrew()
    const { updateListAndType, context, updateList } = useCommonState();
    const [ formValues, setFormValues ] = useState({
        name: '',
        role: ''
    }) 
    
    useEffect(() => {
        if (data?.data.data) {
            const adaptedCrew = adaptCrew(data.data.data)
            updateListAndType(adaptedCrew, 'crew')
        }
    }, [data?.data.data, updateListAndType])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues(prev => ({...prev, [name]: value}))
    }   

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newList = [...context.list, {...formValues, _id: generateRandomId() }] as Crew[]
        updateList(newList)
    }

    if (data?.data.data) {

        return (
            <>
                <h1>Crew</h1>
                <hr className="divider" />
                <Dashboard />
                <section>Create crew</section>
                <form>
                    <div>
                        <label htmlFor="name">name</label>
                        <input type='text' name='name' onChange={handleChange} value={formValues.name} placeholder='Type name' />
                    </div>
                    <div>
                        <label htmlFor="role">role</label>
                        <input type='text' name='role' onChange={handleChange} value={formValues.role} placeholder='Type role' />
                    </div>
                    <div>
                        <button type='button' onClick={handleSubmit}>Añadir</button>
                    </div>
                </form>
            </>
        );
    }

    return <>Loading</>;
};

export default CrewPage;
