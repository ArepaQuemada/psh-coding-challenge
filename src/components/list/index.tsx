import { useCommonState } from "../../hooks";
import { typedList } from "../../utilities";
import './index.scss'

const List = () => {
    const { context } = useCommonState()
    let list = context.filterList.length === 0 ? context.list : context.filterList
    return (  
        <div className="list-container">
            {typedList[context.type](list)}
        </div>
    );
}

export default List;