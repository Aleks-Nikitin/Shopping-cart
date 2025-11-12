import { Link } from "react-router";
import classes from "./Nav.module.css";
import { ShoppingCart } from "lucide-react";
function Nav({ onCartClick, onShopClick, cartNum }) {
  return (
    <div className={classes.nav}>
      <h1 className={classes.title}>Mock Shopping Website</h1>
      <Link to="home" className={classes.link}>
        {" "}
        Home Page
      </Link>
      <Link to="shop" className={classes.link} onClick={onShopClick}>
        Shopping Page
      </Link>
      <Link to="shop/cart" className={classes.link} onClick={onCartClick}>
        Cart Page <ShoppingCart /> <p className={classes.shopIcon}>{cartNum}</p>
      </Link>
    </div>
  );
}
export default Nav;
