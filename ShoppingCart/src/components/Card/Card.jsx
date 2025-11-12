import { useContext, useState } from "react"
import QuantityCntrl from "../QuantityCntrl/QuantityCntrl"
import classes from './Card.module.css';
import { DeleteContxt } from "../deleteContxt";
export default function Card({price,title,img,id,onClick}){ // addToCart function needs to be passed  
    const [itemsArr,setItemsArr] = useContext(DeleteContxt);
    return (
        <div className={classes.card} id={id}>
            <h3 className={classes.title}>{title}</h3>
            <img src={img} alt="image of product 1" className={classes.img}/>
            <p className={classes.price}>$ {price}</p>
            <QuantityCntrl key={id} id={id} ></QuantityCntrl>
           {onClick && <button className={classes.btn} onClick={onClick} >Add to cart</button>}
           {!onClick && <button className={classes.btn} onClick={()=>setItemsArr(itemsArr.filter((e)=> e.id != id))}>Remove </button>}
        </div>
    )
}

