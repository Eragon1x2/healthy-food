import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import style from './list_item.module.css';
import { json } from "react-router-dom";

const List_item = ({img, title, price, id, addOr}) => {
    const a = {img, title, price, id,};
    useEffect(() => {
        AOS.init()
    }, [])
    const onBuy = (id) => {
        addOr(id);
    
    }
    return(
    <li data-aos="flip-up" key={id} className={style.div_li}>
    <img alt="" src={img}></img>  
    <h3>{title}</h3>
    <p>{price}$</p>  
    <button onClick={() => onBuy(a)}>buy</button>
    </li>
    )
}

export default List_item;