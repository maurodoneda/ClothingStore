import { ReactComponent as ShoppingBagIcon } from "./assets/shopping-bag.svg";
import './cart-icon.styles.scss';
import {useContext} from "react";
import {CartDropdownContext} from "../../contexts/cart-dropdown.context";

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen} = useContext(CartDropdownContext);

    function toggleIsCartOpen() {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className={'cart-icon-container'} onClick={toggleIsCartOpen}>
            <ShoppingBagIcon className={'shopping-icon'} />
            <span className={'item-count'}>0</span>
        </div>
    )
}

export default CartIcon;
