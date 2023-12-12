import { useState } from "react";
import { createUserWithEmailAndPasswordFunc } from "../../utils/firebase.utils";
import InputForm from "../input-form/inputform.component";
import './signup.component.scss'

const formFields = {
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
};

const SignUpForm = () => {
    // We would require a state in here, why??
    // We need a way to store whatever information the user has entered in the input tags
    // State will store that information and then onSubmit we can pass that information to firebase

    const [formField, setformField] = useState(formFields);

    const onChangeHandler = (event) => {
        // The event will give name, value, etc
        const {name, value} = event.target;

        setformField({...formField , [name]: value});
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault(); // This will not submit anything any where

        console.log(formField);

        const resp = await createUserWithEmailAndPasswordFunc(formField.email, formField.password);

        console.log(resp);
    }

    return (
        <div className="sign-up-container">
            <h2>Register and start shopping!!!</h2>
            <form onSubmit={onSubmitHandler}>
                <h1>Signup Page</h1>

                <InputForm required label='Display Name' type='text' name='username' value={formField.username} onChange={onChangeHandler} />
                <InputForm required label='Email' type='email' name='email' value={formField.email} onChange={onChangeHandler} />
                <InputForm required label='Password' type='password' name='password' value={formField.password} onChange={onChangeHandler} />
                <InputForm required label='Confirm Password' type='password' name='confirmpassword' value={formField.confirmpassword} onChange={onChangeHandler} />
                
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;