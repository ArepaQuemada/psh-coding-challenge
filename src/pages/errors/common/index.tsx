import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CommonError = () => {
    const navigation = useNavigate()
    useEffect(() => {
        window.addEventListener('beforeunload', () => navigation('/'))
        return () => {
            window.removeEventListener("beforeunload", () => {});
        }
    })

    return (
        <>
            <p>
                An error has occured
            </p>
            <p>
                Try again later
            </p>
        </>
      )
}

export default CommonError;