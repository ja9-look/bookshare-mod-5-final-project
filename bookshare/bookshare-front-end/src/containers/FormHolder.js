import React from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';

const FormHolder = (props) => {

    return (
            <div className={'form_holder'}>
            <button className={'signUpFormToggler'} onClick={props.handleSignUpToggle}>Sign Up</button>
            <button className={'loginFormToggler'} onClick={props.handleLoginToggle}>Login</button>
            <SignUpForm handleSignUp={props.handleSignUp}/>
            <LoginForm handleLogin={props.handleLogin}/>
            </div>
        )

}

export default FormHolder;