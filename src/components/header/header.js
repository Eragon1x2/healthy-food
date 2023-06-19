import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from './header.module.css';
// import basket from './busket.png';
import { ReactComponent as Baskets } from "./busket.svg";
import { ReactComponent as Close } from "./close.svg";
import { ReactComponent as Burger } from "./burger.svg";
import Basket from "../basket/basket";
const Header = ({forModal, forModalDelete}) => {
    const [modal, setModal] = useState(false);
    const [mobileModal, setMobileModal] = useState(false);
    const toogleModal = (gg) => {
        setModal(!modal)
    }
    const toogleMobile = () => {
        setMobileModal(!mobileModal);
    }
    return(
    <div className={style.header}>     
    <Burger className={style.header_burger} onClick={() => setMobileModal(!mobileModal)}></Burger> 
     <nav className={style.navigation}>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/catalog'>Catalog</NavLink>
    <p onClick={() => toogleModal()}><Baskets className={style.basket}/></p>
    <p>Register/login</p>
    </nav>
    {mobileModal && <div className={style.mobileModal}>
        <Close className={style.close} onClick={() => setMobileModal(false)}></Close>
    <nav className={style.mobile_navigation}>
    <NavLink to='/' onClick={() => toogleMobile()}>Home</NavLink>
    <NavLink to='/catalog' onClick={() => toogleMobile()}>Catalog</NavLink>
    <p onClick={() => {toogleModal(); toogleMobile()}}><Baskets className={style.basket}/></p>
    <p>Register/login</p>
    </nav></div>}
    {modal && <Basket onModal={toogleModal} forModalDelete={forModalDelete} forModal={forModal}></Basket>}
    </div>
    )
}

export default Header;