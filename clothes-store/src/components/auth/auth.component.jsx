
import SignUp from "../sign-up/sign-up.component";
import SignIn from "../sign-in/sign-in.component";
import './auth.style.scss';

const Authentication = () => {

    return (
        <div className={'auth-container'}>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Authentication;
