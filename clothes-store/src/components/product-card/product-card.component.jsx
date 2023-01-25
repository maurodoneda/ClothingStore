import Button from "../button/button";
import './product-card.styles.scss'
import {useSelector} from "react-redux";
import {selectCart} from "../../store/cart/cart.selectors";
import {addItemToCart} from "../../store/cart/cart.actions";
import {useEffect} from "react";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {cartItems} = useSelector(selectCart);

    return (
        <div className={'product-card-container'}>
            <img src={imageUrl} alt={`${name}`}/>
            <div className={'footer'}>
                <span className={'name'}>{name}</span>
                <span className={'price'}>{price}</span>
            </div>
            <Button buttonType={'inverted'} onClick = {() => addItemToCart(product, cartItems)}>Add to card</Button>
        </div>
    )
}

export default ProductCard;
