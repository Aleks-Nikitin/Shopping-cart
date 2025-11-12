import { useOutletContext } from "react-router";
import Card from "../Card/Card";
import classes from "./Cart.module.css";
import { Trash2 } from "lucide-react";
export default function Cart() {
  const [itemsArr, setItemsArr] = useOutletContext();

  return (
    <>
      <button className={classes.btn} onClick={() => setItemsArr([])}>
        Clear the cart<Trash2></Trash2>
      </button>
      {!itemsArr[0] && <h1>Cart is empty add something</h1>}
      <div className={classes.container}>
        {itemsArr[0] &&
          itemsArr.map((product) => {
            return (
              <Card
                price={product.price}
                title={product.title}
                img={product.image}
                id={product.id}
                key={product.id}
              ></Card>
            );
          })}
      </div>
    </>
  );
}
