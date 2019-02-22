import React from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';

import bookshare_logo_slogan from '../images/bookshare_logo_slogan.png';

const FormHolder = (props) => {

    return (
            <div className={'form_holder'}>
                <img className={'welcomeLogo'} src={bookshare_logo_slogan} alt="Bookshare Logo Slogan" />
                <button className={'signUpFormToggler hidden'} onClick={props.handleSignUpToggle}>Sign Up</button>
                <button className={'loginFormToggler hidden'} onClick={props.handleLoginToggle}>Login</button>
                <SignUpForm handleSignUp={props.handleSignUp}/>
                <LoginForm handleLogin={props.handleLogin}/>
            </div>
        )

}

export default FormHolder;