 import { useContext, useState } from "react";
import { QuantityContext } from "../quantityContxt";

export default function QuantityCntrl({id}){
    const [quantity,setQuantity,quantity1,setQuantity1,quantity2,setQuantity2,quantity3,setQuantity3,quantity4,setQuantity4,quantity5,setQuantity5]= useContext(QuantityContext)

    function handleIncrease(){
        if(id == 1){
            return setQuantity((prevQuantity)=> (prevQuantity+1));
        }
        else if(id ==2 ){
            return setQuantity1((prevQuantity)=> (prevQuantity+1));
        }
         else if(id ==3){
            return setQuantity2((prevQuantity)=> (prevQuantity+1));
        }
         else if(id ==4){
            return setQuantity3((prevQuantity)=> (prevQuantity+1));
        }
         else if(id ==5){
            return setQuantity4((prevQuantity)=> (prevQuantity+1));
        }
         else if(id ==6){
            return setQuantity5((prevQuantity)=> (prevQuantity+1));
        }
        
    }
   function handleDecrease(){
    if(id==1&& quantity>1){
        return setQuantity((prevQuantity)=> (prevQuantity-1));
    }
    else if(id==2 && quantity1>1){
        return setQuantity1((prevQuantity)=> (prevQuantity-1));
    }
     else if(id==3 && quantity2>1){
        return setQuantity2((prevQuantity)=> (prevQuantity-1));
    }
    else if(id==4 && quantity3>1){
        return setQuantity3((prevQuantity)=> (prevQuantity-1));
    }
     else if(id==5 && quantity4>1){
        return setQuantity4((prevQuantity)=> (prevQuantity-1));
    }
    else if(id==6 && quantity5>1){
        return setQuantity5((prevQuantity)=> (prevQuantity-1));
    }
      
   }

    return (
        <>
        <button onClick={handleIncrease}>+</button>
        <input type="text" placeholder="1" min="1"
        value={ id==1? quantity : id==2 ? quantity1 : id ==3 ? quantity2: id ==4 ? quantity3
            : id==5 ? quantity4 : id==6 ? quantity5 :1
        }
        onChange={(e)=> 
            id==1? setQuantity(e.target.value): id==2 ? setQuantity1(e.target.value) : id ==3 ? setQuantity2(e.target.value): id ==4 ? setQuantity3(e.target.value)
            : id==5 ? setQuantity4(e.target.value) : id==6 ? setQuantity5(e.target.value) :null
            }
        />
        <button onClick={handleDecrease}>-</button>
        </>
    )
}
