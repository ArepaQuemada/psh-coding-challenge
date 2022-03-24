import { useParams } from "react-router-dom";
import useAsyncQuotes from "../../hooks/useAsyncQuotes";

const Quotes = () => {
    let params = useParams<{id: string}>();
    const { data } = useAsyncQuotes(params.id ?? '')
    
    if (data?.data.data) {
        return (  
            <>
                Quotes
                <p>
                    {data.data.data.content}
                </p>
            </>
        );
    }
    return (
        <>
            Loading
        </>
    )

}

export default Quotes;