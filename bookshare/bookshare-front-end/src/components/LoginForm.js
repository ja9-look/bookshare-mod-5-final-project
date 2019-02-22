import React from 'react';

const LoginForm = (props) => {

    return (
        <div>
            <form className={'login_form'} onSubmit = {props.handleLogin}>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" value="Log In" />
            </form>
        </div>
    )


}

export default LoginForm;