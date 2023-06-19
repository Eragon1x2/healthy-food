import {useState, useEffect} from 'react';
import style from './filter.module.css';
const Filter = ({onf, onG}) => {
    const [filter, setFilter] = useState('');
    const [type, setType] = useState('');
    const onFilter = (e) => {
        setFilter(e.target.value)
        onf(e.target.value)
    }
    const onType = (e) => {
        setType(type)
        onG(e.target.id);
    }
    return(
        <div className={style.filter}>
            <input type='text' value={filter} name='filter' onChange={onFilter} placeholder='input name dish'></input>
            <div className={style.filter_type}>
            <p id='all' onClick={(e) => onType(e)}>All</p>
            <p className={style.filter_line}>/</p>
            <p id='vegetable' onClick={(e) => onType(e)}>vegetable</p>
            <p className={style.filter_line}>/</p>
            <p id='fruit' onClick={(e) => onType(e)}>fruit</p>
            </div>
        </div>
    )
    }

export default Filter;