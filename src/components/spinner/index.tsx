import { ClockLoader } from "react-spinners";
import './index.scss'

const Spinner = () => {
    return ( 
        <div className="spinner-container">
            <ClockLoader size={50} color='#303F9F' />
        </div>
     );
}

export default Spinner;