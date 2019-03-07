import React, {Component} from 'react';
import { withRouter } from 'react-router'
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';

class FormHolder extends Component {

    componentDidMount() {
        if (localStorage.token) {
            this.props.history.push("/book_browser")
        }
    }
    
    render() {
        return (
                <div className={'form_holder'}>
                <video autoPlay loop className={'video-background'} muted playsInline>
                    <source src={`https://res.cloudinary.com/ja9-look/video/upload/v1551958530/buch8.mp4`} type="video/mp4" />
                </video>
                    <p>bookshare</p>
                    <button className={'signUpFormToggler'} onClick={this.props.handleSignUpToggle}>sign up</button>
                    <button className={'loginFormToggler'} onClick={this.props.handleLoginToggle}>login</button>
                    <SignUpForm handleSignUp={this.props.handleSignUp}/>
                    <LoginForm handleLogin={this.props.handleLogin}/>
                </div>
            )
   } 
} 

export default withRouter(FormHolder);