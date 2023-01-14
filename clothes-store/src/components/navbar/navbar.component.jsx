import {Link, Outlet} from "react-router-dom";
import './navbar.styles.scss'
import {ReactComponent as CrownLogo} from "./assets/crown.svg";
import {Fragment} from "react";

const NavBar = () => {

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
                    <Link className={'nav-link'} to={'/auth'}>
                        Sign-In
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default NavBar
