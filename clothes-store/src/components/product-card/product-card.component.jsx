import Button from "../button/button";
import './product-card.styles.scss'
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selectors";
import {addItemToCart} from "../../store/cart/cart.actions";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(addItemToCart(product, cartItems));
    }

    return (
        <div className={'product-card-container'}>
            <img src={imageUrl} alt={`${name}`}/>
            <div className={'footer'}>
                <span className={'name'}>{name}</span>
                <span className={'price'}>{price}</span>
            </div>
            <Button buttonType={'inverted'} onClick={handleOnClick}>Add to card</Button>
        </div>
    )
}

export default ProductCard;
