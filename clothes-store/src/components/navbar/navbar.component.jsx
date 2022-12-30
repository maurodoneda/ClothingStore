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
                        <div>
                            <CrownLogo/>
                        </div>
                    </Link>
                </div>
                <div className='links-container'>
                    <Link className={'nav-link'} to={'/shop'}>
                        Shop
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default NavBar
