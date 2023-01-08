import {
    auth,
    createUserDoc,
    signInWithGooglePopUp,
    signInWithGoogleRedirect
} from "../utils/firebase/firebase.utils";
import {useEffect} from "react";
import {getRedirectResult} from 'firebase/auth'

const SignIn = () => {

    useEffect(() => redirectResponseCallback, [])

    const redirectResponseCallback = async () => {
        const loginResp = await getRedirectResult(auth);
        console.log(loginResp);

        if(loginResp){
            const userDoc = await createUserDoc(loginResp.user);
        }
    }

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        console.log(user);
        const userDoc = await createUserDoc(user);
    }

    const logGoogleRedirectUser = async () => {
        const {user} = await signInWithGoogleRedirect();
        console.log(user);
        const userDoc = await createUserDoc(user);
    }

    return (
        <div>
            <h1>Sign-in Page</h1>
            <button onClick={logGoogleUser}>Sign with google</button>
            <button onClick={logGoogleRedirectUser}>Sign with Redirect</button>
        </div>
    )

}

export default SignIn;
