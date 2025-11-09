
import { useOutletContext } from "react-router"
import Card from "../Card/Card";
export default function Cart (){
      const [cartProducts,setCartProducts]= useOutletContext();

    return (
        <>
     
        {cartProducts ?
            
            <Card price = {cartProducts[0].price} title={cartProducts[0].title} img={cartProducts[0].image}
             id={cartProducts[0].id} ></Card>
             
        : <h1>Cart is empty add something</h1>}
        </>
    )
}