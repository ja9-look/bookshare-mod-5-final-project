import React, { Component } from 'react';
import API from './adapters/API';
import FormHolder from './containers/FormHolder';

import bookshare_logo from './images/bookshare_logo.png';

import './App.css';

class App extends Component {

  state = {
    books : [],
    current_user : ``
  }

  componentDidMount() {

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

  handleSignUpToggle = () => {

  }

  handleLoginToggle = () => {

  }

  render() {
    return (
      <div className="App">
        <header className={'App-header'}>
          <img className={'App-navbar-logo'} src = { bookshare_logo } alt="Bookshare Logo" />
        </header>
        <body className={'App-body'}>
          <FormHolder handleSignUpToggle={this.handleSignUpToggle} handleLoginToggle={this.handleLoginToggle} handleLogin={this.handleLogin} handleSignUp={this.handleSignUp}/>
        </body>
      </div>
    );
  }
}

export default App;
