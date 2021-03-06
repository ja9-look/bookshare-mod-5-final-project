import React from 'react';

const LoginForm = (props) => {

    return (
        <div className={'loginWrapper'}>
            <form className={'loginForm'} onSubmit = {props.handleLogin}>
                <input type="text" name="username" placeholder="Username" required/>
                <input type="password" name="password" placeholder="Password" required/>
                <input type="submit" value="Log In" />
            </form>
        </div>
    )


}

export default LoginForm;