import { Crew, Character } from "../models";
import { Link } from "react-router-dom";

const typedList = {
    crew: (list: Crew[] | Character[]) => {
        const castedList = list as Crew[]
        return castedList.map((el) => (
            <ul key={el._id} className='list-container__list'>
                <li className="list-container__list-block">
                    <div className="list-container__section">
                        <small className="list-container__small">Name: </small>
                        <p>{el.name}</p>
                    </div>
                    <div className="list-container__section">
                        <small className="list-container__small">Role:</small>
                        <p>{el.role}</p>
                    </div>
                </li>
                <hr className="divider" />
            </ul>
        ))
    },
    character: (list: Crew[] | Character[]) => {
        const castedList = list as Character[]
        return castedList.map(el => (
            <ul key={el._id} className='list-container__list'>
                <li className="list-container__list-block">
                    <div className="list-container__section">
                        <small className="list-container__small">Firstname: </small>
                        <p>{el.firstname}</p>
                    </div>
                    <div className="list-container__section">
                        <small className="list-container__small">Lastname: </small>
                        <p>{el.lastname}</p>
                    </div>
                    <div className="list-container__section--full">
                        <Link to={el._id ?? ''} key={el._id}>
                            Quotes
                        </Link>
                    </div>
                </li>
                <hr className="divider" />
            </ul>
        ))
    }
}

export default typedList