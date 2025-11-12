
import { useOutletContext } from "react-router"
import Card from "../Card/Card";
export default function Cart (){
      const [itemsArr,setItemsArr]= useOutletContext();
      console.log(itemsArr);
      let i=0;
    return (
        <>
     
        {itemsArr[0] ?
        itemsArr.map((product)=>
        {
            ++i;
            console.log(i);
            return   <Card price = {product.price} title={product.title} img={product.image} id={product.id}
             key={product.id} ></Card>

        })
          
             
          
        : <h1>Cart is empty add something</h1>}
        </>
    
    )
}
