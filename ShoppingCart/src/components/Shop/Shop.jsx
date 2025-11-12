import Card from "../Card/Card"
import { useContext, useEffect,useState } from "react"
import { Outlet,useOutletContext } from "react-router";
import { CartContext } from "../context";
export default function Shop (){
    //const [cartNum,setCartNum]=useOutletContext();
    const [itemsArr,setItemsArr]=useOutletContext();

    const cart = useContext(CartContext);

   const [productsArr,setProductsArr]=useState();
 useEffect(()=>{
    const dataFetch = async ()=>{
        const result =(
            await Promise.all([
                fetch('https://fakestoreapi.com/products/1'),
                fetch('https://fakestoreapi.com/products/2'),
                 fetch('https://fakestoreapi.com/products/3'),
                 fetch('https://fakestoreapi.com/products/4'),
                fetch('https://fakestoreapi.com/products/5'),
                 fetch('https://fakestoreapi.com/products/6'),
            ])
        ).map((r)=> r.json());

        const finalR = await Promise.all(result);
        setProductsArr(finalR);
    }
        dataFetch()
    },[])
    function updateIng(product){
        if(JSON.stringify(itemsArr).includes(JSON.stringify(product))){
            return 
        }
        return setItemsArr([...itemsArr,product])
    }
   // const updateItems =(product)=> setItemsArr([...productsArr,product ]);
    return (
         

      (cart == false) ? <div className="shop">
          
            {productsArr && productsArr.map((product)=>
            
            <Card price = {product.price} title={product.title} img={product.image}
             key={product.id} id={product.id} onClick={()=>{
                console.log(product),
             updateIng(product)
             
             }} ></Card>)}
            <h1> Shop</h1>
          
      </div> : <Outlet context={[itemsArr,setItemsArr]}></Outlet>


    )
}