import { useState } from "react"
import QuantityCntrl from "../QuantityCntrl/QuantityCntrl"
import classes from './Card.module.css';
export default function Card({price,title,img,id,onClick}){ // addToCart function needs to be passed  
 

    return (
        <div className={classes.card} id={id}>
            <h3>{title}</h3>
            <img src={img} alt="image of product 1" className={classes.img}/>
            <p>{price}</p>
            <QuantityCntrl></QuantityCntrl>
           {onClick && <button onClick={onClick} >Add to cart</button>}
        </div>
    )
}

