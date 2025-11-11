
import { useOutletContext } from "react-router"
import Card from "../Card/Card";
export default function Cart (){
      const [itemsArr,setItemsArr]= useOutletContext();
    return (
        <>
     
        {itemsArr[0]?
            <Card price = {itemsArr[0].price} title={itemsArr[0].title} img={itemsArr[0].image}
             id={itemsArr[0].id} ></Card>
             
        : <h1>Cart is empty add something</h1>}
        </>
    
    )
}