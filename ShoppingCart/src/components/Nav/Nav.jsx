import { Link } from "react-router";
import classes from "./Nav.module.css"
function Nav(){
    return (
        <div className={classes.nav}>
            <h1 >Mock Shopping Website</h1>
            <Link to="home" className={classes.link}> Home Page</Link>
            <Link to="shop"className={classes.link} >Shopping Page</Link>
            <Link to="cart" className={classes.link}>Cart Page</Link>
        </div>
    )
}
export default Nav;