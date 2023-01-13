import {
    createUserDoc,
    signInWithGooglePopUp,
    signInWithGoogleRedirect
} from "../utils/firebase/firebase.utils";
import SignUp from "../sign-up/sign-up.component";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        console.log(user);
        const userDoc = await createUserDoc(user);
    }

    return (
        <div>
            <h1>Sign-in Page</h1>
            <button onClick={logGoogleUser}>Sign with google</button>
            <SignUp/>
        </div>
    )

}

export default SignIn;
