import './cart-item.styles.scss'

const CartItem = ({item}) => {
    const {name, quantity} = item;

    return (
        <div className={'cart-item-container'}>
            <div>{name}</div>
            <div>{quantity}</div>
        </div>
    );
}

export default CartItem;
