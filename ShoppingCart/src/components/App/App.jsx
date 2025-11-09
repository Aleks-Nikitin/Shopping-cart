import { Outlet } from 'react-router';
import Nav from '../Nav/Nav.jsx';
import classes from './App.module.css'
import './root.css'
import { createContext, useState } from 'react';
import { CartContext } from '../context.jsx';
function App() {

 
  const [cart,setCart] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.navBar}>
        <Nav onCartClick={()=>setCart(true)} onShopClick ={()=>setCart(false)}></Nav>
        </div>
      <div className={classes.content}>
      <CartContext value={cart}>
        <Outlet >
        </Outlet>
        </CartContext>
        </div>
    </div>
  )
}

export default App
