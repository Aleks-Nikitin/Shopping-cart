import Card from "../Card/Card"
import { useContext, useEffect,useState } from "react"
import { Outlet,useOutletContext } from "react-router";
import { CartContext } from "../context";
export default function Shop (){
    //const [cartNum,setCartNum]=useOutletContext();
    const [cartNum, setCartNum,itemsArr,setItemsArr]=useOutletContext();

    const cart = useContext(CartContext);
    const [product1,setProduct1]=useState();
    const [product2,setProduct2]=useState();
    const [product3,setProduct3]=useState();
    const [product4,setProduct4]=useState();
    const [product5,setProduct5]=useState();
    const [product6,setProduct6]=useState();

   const [cartProducts,setCartProducts]=useState();
 useEffect(()=>{
    const dataFetch = async ()=>{
        const result =(
            await Promise.all([
                fetch('https://fakestoreapi.com/products/1'),
                fetch('https://fakestoreapi.com/products/2'),
            ])
        ).map((r)=> r.json());

        const [result1,result2] = await Promise.all(result);
        setProduct1(result1);
        setProduct2(result2);
    }
        dataFetch()
    },[])
    const increment = ()=> setCartNum(1);
    const updateItems =()=> setItemsArr([product1]);
    return (
         

      (cart == false) ? <div className="shop">
          
            {product1 && <Card price = {product1.price} title={product1.title} img={product1.image}
             id={product1.id} onClick={()=>{
                increment(),
             updateItems()
             
             }} ></Card>}
            <h1> Shop</h1>
          
      </div> : <Outlet context={[itemsArr,setItemsArr]}></Outlet>


    )
}