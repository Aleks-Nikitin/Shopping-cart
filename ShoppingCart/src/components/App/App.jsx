import { Outlet } from 'react-router';
import Nav from '../Nav/Nav.jsx';
import classes from './App.module.css'
import './root.css'
import {  useState } from 'react';
import { CartContext } from '../context.jsx';
import { QuantityContext} from '../quantityContxt.jsx';
function App() {
  const [quantity,setQuantity]=useState(1);
  const [itemsArr,setItemsArr]=useState([]);
 const [cartNum,setCartNum]= useState(0);
  const [cart,setCart] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.navBar}>
        <Nav onCartClick={()=>setCart(true)} onShopClick ={()=>setCart(false)} cartNum={cartNum}></Nav>
        </div>
      <div className={classes.content}>
      <QuantityContext value={[quantity,setQuantity]}> 
      <CartContext value={cart}>
        <Outlet context={[cartNum,setCartNum,itemsArr,setItemsArr]}>
        </Outlet>
        </CartContext>
        </QuantityContext>
        </div>
    </div>
  )
}

export default App
