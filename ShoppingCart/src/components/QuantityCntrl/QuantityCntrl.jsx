 import { useState } from "react";

export default function QuantityCntrl(){
     const [quantity,setQuantity]=useState(1);
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