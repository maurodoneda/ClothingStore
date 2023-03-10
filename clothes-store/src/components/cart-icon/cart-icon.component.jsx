import { ReactComponent as ShoppingBagIcon } from "./assets/shopping-bag.svg";
import './cart-icon.styles.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectCart, selectCartCount, selectIsCartOpen} from "../../store/cart/cart.selectors";
import {setIsCartOpen} from "../../store/cart/cart.actions";

const CartIcon = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();

    function toggleIsCartOpen() {
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <div className={'cart-icon-container'} onClick={toggleIsCartOpen}>
            <ShoppingBagIcon className={'shopping-icon'} />
            <span className={'item-count'}>{cartCount}</span>
        </div>
    )
}

export default CartIcon;
