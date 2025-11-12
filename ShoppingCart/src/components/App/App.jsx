import { Outlet } from 'react-router';
import Nav from '../Nav/Nav.jsx';
import classes from './App.module.css'
import './root.css'
import {  useState } from 'react';
import { CartContext } from '../context.jsx';
import { QuantityContext} from '../quantityContxt.jsx';
function App() {
  const [quantity,setQuantity]=useState(1);
    const [quantity1,setQuantity1]=useState(1);
    const [quantity2,setQuantity2]=useState(1);
    const [quantity3,setQuantity3]=useState(1);
    const [quantity4,setQuantity4]=useState(1);
    const [quantity5,setQuantity5]=useState(1);
  const [itemsArr,setItemsArr]=useState([]);

  const [cart,setCart] = useState(false);


  return (
    <div className={classes.container}>
      <div className={classes.navBar}>
        <Nav onCartClick={()=>setCart(true)} onShopClick ={()=>setCart(false)} cartNum={itemsArr.length}></Nav>
        </div>
      <div className={classes.content}>
      <QuantityContext value={[quantity,setQuantity,quantity1,setQuantity1,quantity2,setQuantity2,quantity3,setQuantity3,quantity4,setQuantity4,quantity5,setQuantity5]}> 
      <CartContext value={cart}>
        <Outlet context={[itemsArr,setItemsArr]}>
        </Outlet>
        </CartContext>
        </QuantityContext>
        </div>
    </div>
  )
}

export default App
