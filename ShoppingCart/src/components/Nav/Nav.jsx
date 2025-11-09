import { Link } from "react-router";
import classes from "./Nav.module.css"
function Nav({onCartClick,onShopClick,cartNum}){
    
    return (
        <div className={classes.nav}>
            <h1 >Mock Shopping Website</h1>
            <Link to="home" className={classes.link}> Home Page</Link>
            <Link to="shop"className={classes.link} onClick={onShopClick}>Shopping Page</Link>
            <Link to="shop/cart" className={classes.link} onClick={onCartClick} >Cart Page {cartNum}</Link>
        </div>
    )
}
export default Nav;