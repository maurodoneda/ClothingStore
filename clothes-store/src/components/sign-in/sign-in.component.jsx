import {useContext, useState} from "react";
import {
    createUserDoc,
    signInWithGooglePopUp,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'
import Button from "../button/button";
import {UserContext} from "../../contexts/user.context";


const defaultFormFields = {
    email: '',
    password: '',
};

export const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const {setCurrentUser} = useContext(UserContext);
    const handleFormChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
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
        await createUserDoc(user);
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
