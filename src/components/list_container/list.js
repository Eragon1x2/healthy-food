import React, { useState } from "react";
import style from './list.module.css';
import List_item from "../list_item/list_item";
const List = ({list, title, addOr, gg}) => {
    const updatedArray = list.slice(0, 3);
    return(
        <div className={style.list}>
           {title &&  <h2>{title}</h2>}
            <ul>
            {gg ? updatedArray.map(a => (
            <List_item id={a.id} img={a.img} title={a.title} addOr={addOr} price={a.sale_price}/>
            )
            ) : list.map(a => (
                <List_item id={a.id} img={a.img} title={a.title} addOr={addOr} price={a.sale_price}/>
                )
                )}
            </ul>
        </div>
    )
}

export default List;
