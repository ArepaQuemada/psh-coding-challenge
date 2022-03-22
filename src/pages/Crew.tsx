import { useAsync } from "../hooks";
import config from "../services/config";
import { Crew } from "../models/index";

const  CrewPage = () => {
    const { data } = useAsync<Crew>({ url: config.endpoints.crew.name, method: config.endpoints.crew.method, callOnLoad: true })
    return ( 
        <>
        <h1>Crew</h1>
        </>
     )
}

export default CrewPage;