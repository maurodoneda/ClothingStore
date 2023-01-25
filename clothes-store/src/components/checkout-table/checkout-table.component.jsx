import './checkout-table.styles.scss'
import Button from "../button/button";
import {Link} from "react-router-dom";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {BiTrash} from "react-icons/bi";
import {useSelector} from "react-redux";
import {selectCart} from "../../store/cart/cart.selectors";
import {addItemToCart, removeItemFromCart, removeItems} from "../../store/cart/cart.actions";

const CheckoutTable = () => {
    const {cartItems, cartTotal} = useSelector(selectCart);

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
                                <AiOutlineMinus className={'action-btn'} onClick={() => removeItemFromCart(item, cartItems)}/>
                                <div>{item.quantity}</div>
                                <AiOutlinePlus className={'action-btn'} onClick={() => addItemToCart(item, cartItems)}/>
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
                <h2>Total: $ {cartTotal.toLocaleString(undefined, {minimumFractionDigits: 2})}</h2>
                <Link to={'/payment'} className={'payment-btn'}>
                    <Button> Go to Payment </Button>
                </Link>
            </div>
        </div>
    )
}

export default CheckoutTable;
