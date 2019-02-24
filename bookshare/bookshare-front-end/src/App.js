import React, { Component } from 'react';
import API from './adapters/API';
import Navbar from './components/Navbar';
import BookBrowser from './containers/BookBrowser';
import FormHolder from './containers/FormHolder';


import './App.css';

class App extends Component {

  state = {
    books : [],
    current_user : ''
  }

  componentDidMount() {
    if (localStorage.token) {
      API.getCurrentUser().then(data => {
        this.setState({
          currentUser: data.user
        })
      })
    }
  }

  handleLogin = (event) => {
    event.preventDefault()
    const user = {
      username : event.target.username.value,
      password : event.target.password.value
    }
    API.login(user)
    .then(data => this.login(data))
    event.target.username.value = ''
    event.target.password.value = ''
  }

  login = (data) => {
    localStorage.setItem('token', data.jwt)
  }

  handleSignUp = (event) => {
    event.preventDefault()
    const newUser = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      username: event.target.username.value,
      password: event.target.password.value
    }
    this.createUser(newUser)
    event.target.first_name.value = ''
    event.target.last_name.value = ''
    event.target.username.value = ''
    event.target.password.value = ''
  }

  createUser = (newUser) => {
    API.createUser(newUser)
      .then(data => this.login(data))
  }

  handleLogOut = () => {
    localStorage.removeItem('token')
  }

  handleSignUpToggle = () => {
    const signUpWrapper = document.querySelector('.signUpWrapper')
    const loginWrapper = document.querySelector('.loginWrapper')
    signUpWrapper.classList.toggle('visible')
    loginWrapper.classList.remove('visible')
  }

  handleLoginToggle = () => {
    const signUpWrapper = document.querySelector('.signUpWrapper')
    const loginWrapper = document.querySelector('.loginWrapper')
    loginWrapper.classList.toggle('visible')
    signUpWrapper.classList.remove('visible')
  }

  render() {
    return (
      <div className="App">
        <header className={'App-header'}>
        </header>
        <body className={'App-body'}>
        {localStorage.token
        ?
        <div>
          <Navbar handleLogOut={this.handleLogOut} />
          <BookBrowser />
        </div>
        :
          <FormHolder handleSignUpToggle={this.handleSignUpToggle} handleLoginToggle={this.handleLoginToggle} handleLogin={this.handleLogin} handleSignUp={this.handleSignUp} />
        }
        </body>
      </div>
    );
  }
}

export default App;
