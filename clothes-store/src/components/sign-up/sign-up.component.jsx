import {useContext, useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDoc} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss'
import Button from "../button/button";
import {UserContext} from "../../contexts/user.context";


const defaultFormFields = {
    name : '',
    email: '',
    password: '',
    confirmPassword: ''
};

export const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {name, email, password, confirmPassword} = formFields;
    const { setCurrentUser } = useContext(UserContext);

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
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            await createUserDoc(user, { name });

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
