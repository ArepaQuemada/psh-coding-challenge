import { useAsyncCrew, useCommonState } from "../../hooks";
import Dashboard from "../../components/dashboard";
import { useEffect } from "react";
import adaptCrew from "../../adapters/adaptCrew";

const CrewPage = () => {
    const { data } = useAsyncCrew()
    const { updateListAndType } = useCommonState();

    useEffect(() => {
        if (data?.data.data) {
            const adaptedCrew = adaptCrew(data.data.data)
            updateListAndType(adaptedCrew, 'crew')
        }
    }, [data?.data.data, updateListAndType])

    if (data?.data.data) {

        return (
            <>
                <h1>Crew</h1>
                <hr className="divider" />
                <Dashboard />
            </>
        );
    }

    return <>Loading</>;
};

export default CrewPage;
