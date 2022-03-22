import { useAsync, useCommonState } from "../../hooks";
import config from "../../services/config";
import { ResponseList, Crew } from "../../models/index";
import Dashboard from "../../components/dashboard";
import { useEffect } from "react";

const CrewPage = () => {
    const { data } = useAsync<ResponseList<Crew>>({
        url: config.endpoints.crew.name,
        method: config.endpoints.crew.method,
        callOnLoad: true
    });
    const { updateListAndType } = useCommonState();

    useEffect(() => {
        if (data?.data.data) {
            updateListAndType(data.data.data, 'crew')
        }
    }, [data?.data.data, updateListAndType])

    if (data?.data.data) {

        return (
            <>
                <h1>Crew</h1>
                <Dashboard />
            </>
        );
    }

    return <>Loading</>;
};

export default CrewPage;
