import Card from "../Card/Card";
import { useContext, useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router";
import { CartContext } from "../context";
import classes from "./Shop.module.css";
export default function Shop() {
  const [loading, setLoading] = useState(true);
  const [itemsArr, setItemsArr] = useOutletContext();

  const cart = useContext(CartContext);

  const [productsArr, setProductsArr] = useState();
  useEffect(() => {
    const dataFetch = async () => {
      const result = (
        await Promise.all([
          fetch("https://fakestoreapi.com/products/1"),
          fetch("https://fakestoreapi.com/products/2"),
          fetch("https://fakestoreapi.com/products/3"),
          fetch("https://fakestoreapi.com/products/4"),
          fetch("https://fakestoreapi.com/products/5"),
          fetch("https://fakestoreapi.com/products/6"),
        ])
      ).map((r) => r.json());

      const finalR = await Promise.all(result);
      if (finalR) {
        setLoading(false);
      }
      setProductsArr(finalR);
    };
    dataFetch();
  }, []);
  function updateIng(product) {
    if (JSON.stringify(itemsArr).includes(JSON.stringify(product))) {
      return;
    }
    return setItemsArr([...itemsArr, product]);
  }
  // const updateItems =(product)=> setItemsArr([...productsArr,product ]);
  return loading ? (
    <h2>Loading... </h2>
  ) : cart == false ? (
    <>
      <h1 className={classes.shopTitle}> Shop</h1>
      <div className={classes.shop}>
        {productsArr &&
          productsArr.map((product) => (
            <Card
              price={product.price}
              title={product.title}
              img={product.image}
              key={product.id}
              id={product.id}
              onClick={() => {
                (console.log(product), updateIng(product));
              }}
            ></Card>
          ))}
      </div>
    </>
  ) : (
    <Outlet context={[itemsArr, setItemsArr]}></Outlet>
  );
}
