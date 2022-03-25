import Spinner from "../../components/spinner";
import useAsyncQuotes from "../../hooks/useAsyncQuotes";

const Quotes = () => {
    const { data } = useAsyncQuotes()
    
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
            <Spinner />
        </>
    )

}

export default Quotes;