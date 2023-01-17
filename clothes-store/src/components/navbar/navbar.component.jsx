import {Link, Outlet} from "react-router-dom";
import './navbar.styles.scss'
import {ReactComponent as CrownLogo} from "./assets/crown.svg";
import {Fragment, useContext} from "react";
import {UserContext} from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {CartDropdownContext} from "../../contexts/cart-dropdown.context";

const NavBar = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartDropdownContext);

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
