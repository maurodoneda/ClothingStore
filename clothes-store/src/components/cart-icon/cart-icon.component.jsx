import { ReactComponent as ShoppingBagIcon } from "./assets/shopping-bag.svg";
import './cart-icon.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen, cartCount} = useContext(CartContext);

    function toggleIsCartOpen() {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className={'cart-icon-container'} onClick={toggleIsCartOpen}>
            <ShoppingBagIcon className={'shopping-icon'} />
            <span className={'item-count'}>{cartCount}</span>
        </div>
    )
}

export default CartIcon;
