import { useParams } from "react-router-dom";

const Quotes = () => {
    let params = useParams();
    console.log(params)
    return (  
        <>
            Quotes
        </>
    );
}

export default Quotes;