import {singInWithGooglePopUp} from "../utils/firebase/firebase.utils";


const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await singInWithGooglePopUp();
        console.log(response);
    }

    return (
        <div>
            <h1>Sign-in Page</h1>
            <button onClick={logGoogleUser}>Sign with google</button>
        </div>
    )

}

export default SignIn;
