
import { useOutletContext } from "react-router"
import Card from "../Card/Card";
export default function Cart (){
      const [cartProducts,setCartProducts]= useOutletContext();
      console.log(cartProducts)
      console.log(cartProducts[0].price);
    return (
        <>
        <h1>You are on cart page</h1>
     
        {cartProducts[0]&& cartProducts.map((element)=>{

            <Card price = {element.price} title={element.title} img={element.image}
             id={element.id} ></Card>
        })}
        </>
    )
}