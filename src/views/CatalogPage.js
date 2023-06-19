import {useState} from "react";
import List from "../components/list_container/list";
import Filter from "../components/filter/filter";

const CatalogPage = ({list, addOr}) => {
    const [lists, setLists] = useState(list);
    const [filter, setFilter] = useState('');
    const [type, setType] = useState('all');
    const FilterList = (filter) => {
        setFilter(filter);
        }
    const FilterType = (id) => {
        setType(id)

    }
    // a.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    const filtered = lists.filter(a => {
        if(type === 'all') {
            return a.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        }
        if(type === a.type) {
            return a.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        }
    });
    return(
        <div>
        <Filter onf={FilterList} onG={FilterType} ></Filter>
        <List list={filtered} gg={false} addOr={addOr}></List>
        </div>
    )
}

export default CatalogPage;