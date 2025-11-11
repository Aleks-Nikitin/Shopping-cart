
import { useOutletContext } from "react-router"
import Card from "../Card/Card";
export default function Cart (){
      const [itemsArr,setItemsArr]= useOutletContext();
      console.log(itemsArr);
    return (
        <>
     
        {itemsArr[0] ?
        itemsArr.map((product)=>
            
            <Card price = {product.price} title={product.title} img={product.image}
             key={product.id} ></Card>)
          
        : <h1>Cart is empty add something</h1>}
        </>
    
    )
}
