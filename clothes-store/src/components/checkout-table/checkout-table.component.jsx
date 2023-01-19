import {useContext} from "react";
import {CartDropdownContext} from "../../contexts/cart-dropdown.context";
import './checkout-table.styles.scss'
import Button from "../button/button";
import {Link} from "react-router-dom";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const CheckoutTable = () => {
    const {cartItems, addItemToCart, removeItemFromCart} = useContext(CartDropdownContext);

    return (
        <div>
            <table className={'checkout-table'}>
                <thead>
                    <tr className={'table-header'}>
                        <th></th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody className={'table-body'}>
                {cartItems.map(item =>
                    <tr key={item.id} className={'table-row'}>
                        <td className={'image-container'}><img src={item.imageUrl}/></td>
                        <td className={'product-name'}>{item.name}</td>
                        <td>
                            <div className={'product-quantity'}>
                                <AiOutlineMinus className={'action-btn'} onClick={() => removeItemFromCart(item)}/>
                                <div>{item.quantity}</div>
                                <AiOutlinePlus className={'action-btn'} onClick={() => addItemToCart(item)}/>
                            </div>
                        </td>
                        <td className={'product-price'}>{item.price}</td>
                        <td className={'total'}>${item.price * item.quantity}</td>
                    </tr>
                )}
                </tbody>
            </table>
            <div className={'payment-container'}>
                <h2>Total: $ {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString(undefined, {minimumFractionDigits: 2})}</h2>
                <Link to={'/payment'} className={'payment-btn'}>
                    <Button> Go to Payment </Button>
                </Link>
            </div>
        </div>

    )
}

export default CheckoutTable;
