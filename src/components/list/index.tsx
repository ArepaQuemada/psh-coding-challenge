import { useCommonState } from "../../hooks";
import { typedList } from "../../utilities";
import './index.scss'

const List = () => {
    const { context } = useCommonState()
    let list = context.filterList.length === 0 ? context.list : context.filterList
    return (  
        <>
            {typedList[context.type](list)}
        </>
    );
}

export default List;