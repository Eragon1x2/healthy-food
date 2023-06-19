import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState} from "react";
import { createPortal } from "react-dom";
import style from './basket.module.css';
import { ReactComponent as Trash } from "./trash.svg";
import { ReactComponent as Close } from './close.svg';
import { ReactComponent as Left } from './left.svg';
const modalRoot = document.querySelector('#modal-root');

const Basket = ({onModal, forModal, forModalDelete}) => {
    const [total, setTotal] = useState(0);
    const [lox, setLox] = useState(false);
    const closeModal = () => { 
        onModal(false)
    }
    useEffect(() => {
        AOS.init()
    }, [])
    useEffect(() => {
    if(forModal === null) return;
    forModal.length > 4 ? setLox(true) : setLox(false);
    forModal.map(a => {
        setTotal(total + a.price)
    });
    const gg = forModal.length;
    forModal.length === 0 && setTotal(0);
    // return () => {
    //     if(forModal.length <= gg) {
    //         setTotal(total - 100);
    //     }
    // }
    }, [forModal])
    // const govno = useEffect((price) => {
    //     setTotal(Number(total) - Number(price))
    // },[forModal])
    return(
        createPortal(
        <div className={style.modal_backdrop} style={{overflowY: `${lox ? 'scroll' : 'none'}`}} data-aos="fade-left">
            <div className={style.modal_close_div}><Close onClick={() => closeModal()} className={style.modal_close}></Close></div>
            <h3 className={style.basket_title}><span><Left className={style.basket_left}></Left></span>Basket</h3>
    
        {forModal && <ul className={style.basket_list}>
        {forModal.map(a => (
        <li className={style.basket_list_item}>
        <img alt="" src={a.img}></img>  
        <p className={style.basket_price}>{a.price}$</p> 
       <div className={style.gg}>
       <div className={style.trash} onClick={() => {forModalDelete(a.id);  }}><Trash className={style.basket_trash}></Trash></div>
        <button className={style.basket_list_item_button}>Buy</button>
       </div>
        </li>    
        ))}    
        </ul>}
        <h4 className={style.basket_total}>total: {total}$</h4>
        </div>, modalRoot)
    )
}

export default Basket;