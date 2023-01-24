import './cart-dropdown.styles.scss'
import Button from "../button/button";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import {Link} from "react-router-dom";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);

    return (
        <div className={'cart-dropdown-container'}>
            <div className={'cart-items'}>
                {cartItems.map(x => <CartItem item = {x}/>)}
            </div>
            <Link to={'/checkout'}>
                <Button>Go To Checkout</Button>
            </Link>
        </div>
    )
}

export default CartDropdown;
