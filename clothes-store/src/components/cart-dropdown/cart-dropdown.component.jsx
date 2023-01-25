import './cart-dropdown.styles.scss'
import Button from "../button/button";
import CartItem from "../cart-item/cart-item.component";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCart, selectCartItems} from "../../store/cart/cart.selectors";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);

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
