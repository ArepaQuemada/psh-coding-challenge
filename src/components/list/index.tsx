import { useCommonState } from "../../hooks";
import { typedList } from "../../utilities";
import './index.scss'

const List = () => {
    const { context } = useCommonState()

    return (  
        <>
            {typedList[context.type](context.list)}
        </>
    );
}

export default List;