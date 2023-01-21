import {useContext} from "react";
import {CartDropdownContext} from "../../contexts/cart-dropdown.context";
import './checkout-table.styles.scss'
import Button from "../button/button";
import {Link} from "react-router-dom";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {BiTrash} from "react-icons/bi";

const CheckoutTable = () => {
    const {cartItems, addItemToCart, removeItemFromCart, removeItems} = useContext(CartDropdownContext);

    return (
        <div className={'table-container'}>
            <table>
                <thead>
                    <tr className={'table-header'}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th></th>
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
                        <td> <BiTrash size={'25'} className={'action-btn'} onClick={() => removeItems(item)}/> </td>
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
