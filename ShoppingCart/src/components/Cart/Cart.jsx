
import { useOutletContext } from "react-router"
import Card from "../Card/Card";
export default function Cart (){
      const [itemsArr,setItemsArr]= useOutletContext();

    return (
        <>
        <button onClick={()=> setItemsArr([])}>Clear the cart</button>
        {itemsArr[0] ?
        
        itemsArr.map((product)=>
        {
        
        
            return  <Card price = {product.price} title={product.title} img={product.image} id={product.id}
             key={product.id} ></Card>

        })
          
             
    
        : <h1>Cart is empty add something</h1>}
        </>
    
    )
}
