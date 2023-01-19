import './cart-item.styles.scss'

const CartItem = ({item}) => {
    const {name, quantity, imageUrl, price } = item;

    return (
        <div className={'cart-item-container'}>
            <img className={''} src={imageUrl} alt={`${name}`}/>
            <div className={'item-details'}>
                <div>{name}</div>
                <div>{quantity} x {`$${price}`}</div>
            </div>
        </div>
    );
}

export default CartItem;
