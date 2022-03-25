import { useAsyncCharacter, useCommonState } from "../../hooks";
import Dashboard from "../../components/dashboard";
import { useEffect, useState } from "react";
import { adaptCharacter } from "../../adapters";
import { Character } from "../../models";
import { generateRandomId } from "../../utilities";

const Characters = () => {
    const { data } = useAsyncCharacter()
    const { updateListAndType, updateList, context } = useCommonState()
    const [ formValues, setFormValues ] = useState({
        firstname: '',
        lastname: ''
    }) 

    useEffect(() => {
        if (data?.data.data) {
            const adaptedCharacter = adaptCharacter(data.data.data)
            updateListAndType(adaptedCharacter, 'character')
        }
    }, [data?.data.data, updateListAndType])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues(prev => ({...prev, [name]: value}))
    }   

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newList = [...context.list, {...formValues, _id: generateRandomId() }] as Character[]
        updateList(newList)
    }

    if (data?.data.data) {

        return (
            <>
                <h1>Characters</h1>
                <hr className="divider" />
                <Dashboard />
                <section>
                    <h3>Create character</h3>
                </section>
                <form>
                    <div>
                        <label htmlFor="firstname">Firstname</label>
                        <input type='text' name='firstname' onChange={handleChange} value={formValues.firstname} placeholder='Type firstname' />
                    </div>
                    <div>
                        <label htmlFor="lastname">Lastname</label>
                        <input type='text' name='lastname' onChange={handleChange} value={formValues.lastname} placeholder='Type lastname'/>
                    </div>
                    <div>
                        <button type='button' onClick={handleSubmit}>Añadir</button>
                    </div>
                </form>
                
            </>
        )
    }

    return (
        <>
            Loading
        </>
    );
}

export default Characters;