import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'
import Button from "../button/button";
import {useDispatch} from "react-redux";
import {signUpStart} from "../../store/user/user.actions";

const defaultFormFields = {
    name : '',
    email: '',
    password: '',
    confirmPassword: ''
};

export const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {name, email, password, confirmPassword} = formFields;
    const dispatch = useDispatch();

    const handleFormChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("passwords does not match");
            return;
        }

        try{
            dispatch(signUpStart(email, password, name))
            setFormFields(defaultFormFields);

        } catch(error) {

            if(error.code === 'auth/email-already-in-use'){
                alert("Email already used")
            }
            console.log(error);
        }
    }

    return (
        <div className={'sign-up-container'}>
            <h2>Don't have an account? Sign up here!</h2>
            <h3>Sign up with email and password</h3>
            <form onSubmit={handleSubmit}>
                <FormInput label = 'Name' required type={"text"} onChange={handleFormChange} name={"name"} value={name}/>
                <FormInput label = 'Email' required type={"text"} onChange={handleFormChange} name={"email"} value={email}/>
                <FormInput label = 'Password' required type={"text"} onChange={handleFormChange} name={"password"} value={password}/>
                <FormInput label = 'Confirm Password' required type={"text"} onChange={handleFormChange} name={"confirmPassword"} value={confirmPassword}/>
                <Button type={"submit"}>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp;
