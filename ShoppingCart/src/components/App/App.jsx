import { Outlet } from 'react-router';
import Nav from '../Nav/Nav.jsx';
import classes from './App.module.css'
import './root.css'
import {  useState } from 'react';
import { CartContext } from '../context.jsx';
function App() {

 const [cartNum,setCartNum]= useState(0);
  const [cart,setCart] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.navBar}>
        <Nav onCartClick={()=>setCart(true)} onShopClick ={()=>setCart(false)} cartNum={cartNum}></Nav>
        </div>
      <div className={classes.content}>
      <CartContext value={cart}>
        <Outlet context={[cartNum,setCartNum]}>
        </Outlet>
        </CartContext>
        </div>
    </div>
  )
}

export default App
