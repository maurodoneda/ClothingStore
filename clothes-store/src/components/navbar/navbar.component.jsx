import {Link, Outlet} from "react-router-dom";
import './navbar.styles.scss'
import {ReactComponent as CrownLogo} from "./assets/crown.svg";
import {Fragment, useContext} from "react";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../contexts/cart.context";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector";

const NavBar = () => {
    const currentUser = useSelector(selectCurrentUser);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
            <div className='navigation'>
                <div className={'logo-container'}>
                    <Link to={'/'}>
                        <CrownLogo className={'logo'}/>
                    </Link>
                </div>
                <div className='nav-links-container'>
                    <Link className={'nav-link'} to={'/shop'}>
                        Shop
                    </Link>
                    {
                        currentUser ? (
                            <span className={'nav-link'} onClick={signOutUser}> Sign-Out</span>
                        ) : (
                            <Link className={'nav-link'} to={'/auth'}>
                                Sign-In
                            </Link>
                        )
                    }
                    <CartIcon/>
                </div>
                { isCartOpen && <CartDropdown/> }
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default NavBar
