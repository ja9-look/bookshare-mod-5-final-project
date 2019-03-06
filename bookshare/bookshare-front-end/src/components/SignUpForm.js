import React from 'react';

const SignUpForm = (props) => {

    return(
        <div className={'signUpWrapper'}>
            <form className={'signUpForm'} onSubmit = {props.handleSignUp} >
                <input type="text" name="first_name" placeholder="First Name" required />
                <input type="text" name="last_name" placeholder="Last Name" required />                
                <input type="text" name="username" placeholder="Username" required/>
                <input type="password" name="password" placeholder="Password" pattern=".{8,}" title="8 or more characters" required />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )

}

export default SignUpForm;