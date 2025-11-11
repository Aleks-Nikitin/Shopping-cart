 import { useContext, useState } from "react";
import { QuantityContext } from "../quantityContxt";

export default function QuantityCntrl(){
    const [quantity,setQuantity]= useContext(QuantityContext)

    function handleIncrease(){
         setQuantity((prevQuantity)=> (prevQuantity+1));
    }
   function handleDecrease(){
       quantity>1 && setQuantity((prevQuantity)=> (prevQuantity-1));
   }

    return (
        <>
        <button onClick={handleIncrease}>+</button>
        <input type="text" placeholder="1" min="1"
        value={quantity}
        onChange={(e)=> setQuantity(e.target.value)}
        />
        <button onClick={handleDecrease}>-</button>
        </>
    )
}