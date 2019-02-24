import React from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';

const FormHolder = (props) => {

    return (
            <div className={'form_holder'}>
                <p>bookshare</p>
                <button className={'signUpFormToggler'} onClick={props.handleSignUpToggle}>sign up</button>
                <button className={'loginFormToggler'} onClick={props.handleLoginToggle}>login</button>
                <SignUpForm handleSignUp={props.handleSignUp}/>
                <LoginForm handleLogin={props.handleLogin}/>
            </div>
        )

}

export default FormHolder;