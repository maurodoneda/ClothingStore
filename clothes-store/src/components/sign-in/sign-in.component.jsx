import {useState} from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDoc,
    signInWithGooglePopUp,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'
import Button from "../button/button";


const defaultFormFields = {
    email: '',
    password: '',
};

export const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {name, email, password, confirmPassword} = formFields;

    const handleFormChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            setFormFields(defaultFormFields);

        } catch (error) {
            switch (error.code){
                case 'auth/wrong-password':
                    alert('wrong password');
                    break;
                case 'auth/user-not-found':
                    alert('user not found');
                break;
                default:
                    console.log(error);
            }
        }
    }

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        console.log(user);
        const userDoc = await createUserDoc(user);
    }

    return (
        <div className={'sign-up-container'}>
            <h3>Sign in with email and password</h3>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' required type={"text"} onChange={handleFormChange} name={"email"} value={email}/>
                <FormInput label='Password' required type={"text"} onChange={handleFormChange} name={"password"} value={password}/>
                <div className={'buttons-container'}>
                    <Button type={"submit"}>Sign In</Button>
                    <Button type={'button'} buttonType={'google'} onClick={logGoogleUser}>Google Sign-In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
