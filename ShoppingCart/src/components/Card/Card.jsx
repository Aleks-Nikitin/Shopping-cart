import { useState } from "react"
import QuantityCntrl from "../QuantityCntrl/QuantityCntrl"

export default function Card({price,title,img,id,onClick}){ // addToCart function needs to be passed  
 

    return (
        <div className="card" id={id}>
            <h3>{title}</h3>
            <img src={img} alt="image of product 1" />
            <p>{price}</p>
            <QuantityCntrl></QuantityCntrl>
            <button onClick={onClick} >Add to cart</button>
        </div>
    )
}

