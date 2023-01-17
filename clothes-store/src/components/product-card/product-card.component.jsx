import Button from "../button/button";
import './product-card.styles.scss'
import {useContext} from "react";
import {CartDropdownContext} from "../../contexts/cart-dropdown.context";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartDropdownContext);

    return (
        <div className={'product-card-container'}>
            <img src={imageUrl} alt={`${name}`}/>
            <div className={'footer'}>
                <span className={'name'}>{name}</span>
                <span className={'price'}>{price}</span>
            </div>
            <Button buttonType={'inverted'} onClick = {() => addItemToCart(product)}>Add to card</Button>
        </div>
    )
}

export default ProductCard;
