import { useState } from "react";
import { useCommonState } from "../../hooks";
import { typedList } from "../../utilities";
import './index.scss'

const List = () => {
    const { context } = useCommonState()
    const [pagination, setPagination] = useState({
        from: 0,
        to: 5,
        active: 1
    })
    let list = context.filterList.length === 0 ? context.list : context.filterList
    const perPage = 5
    const pages = Array.from(Array(Math.ceil(list.length / 5)).keys())

    const handlePagination = (page: number) => {
        setPagination({
            from: page * perPage,
            to: (page + 1) * perPage,
            active: page + 1
        })
    }

    const sliceArray = () => list.slice(pagination.from, pagination.to)

    return (
        <div className="list-container">
            {(typedList[context.type](sliceArray()))}
            <section className="list-container__pagination">
                {pages.map(page => (
                    <button 
                    className={`list-container__page-btn ${page + 1 === pagination.active ? 'list-container__page-btn--active' : ''}`} 
                    key={page} 
                    onClick={() => handlePagination(page)}>
                        {page + 1}
                    </button>
                ))}
            </section>
        </div>
    );
}

export default List;