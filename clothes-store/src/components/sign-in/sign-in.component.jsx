import {createUserDoc, singInWithGooglePopUp} from "../utils/firebase/firebase.utils";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await singInWithGooglePopUp();
        console.log(user);
        const userDoc = await createUserDoc(user);
    }

    return (
        <div>
            <h1>Sign-in Page</h1>
            <button onClick={logGoogleUser}>Sign with google</button>
        </div>
    )

}

export default SignIn;
