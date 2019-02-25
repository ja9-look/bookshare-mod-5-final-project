import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router'
import API from './adapters/API';
import Navbar from './components/Navbar';
import BookBrowser from './containers/BookBrowser';
import FormHolder from './containers/FormHolder';
import Aux from './hoc/Aux';


import './App.css';

class App extends Component {

  state = {
    current_user: '',
    logged_in: false
  }

  componentDidMount() {
    if (localStorage.token) {
      API.getCurrentUser()
        .then(data => {
          this.setState({
            currentUser: data.user
          })
        })
        .then(API.getAllBooks().then(data => console.log(data)))
    }
  }

  handleLogin = (event) => {
    event.preventDefault()
    const user = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    API.login(user)
      .then(data => {
        this.login(data)
        this.props.history.push("/book_browser")
        this.setState({
          logged_in: true
        })
      })
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
      .then(data => {
        this.login(data)
                this.props.history.push("/book_browser")
        this.setState({
          logged_in: true
        })
      })
  }

  handleLogOut = () => {
    localStorage.removeItem('token')
    this.setState({
      logged_in: false
    })
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
      // <div className="App">
      //   <header className={'App-header'}>
      //   </header>
      //   <body className={'App-body'}>
      //   {localStorage.token
      //   ?
      //   <div>
      //     <Navbar handleLogOut={this.handleLogOut} />
      //     <BookBrowser />
      //   </div>
      //   :
      //     <FormHolder handleSignUpToggle={this.handleSignUpToggle} handleLoginToggle={this.handleLoginToggle} handleLogin={this.handleLogin} handleSignUp={this.handleSignUp} />
      //   }
      //   </body>
      // </div>
      <div className="App">



        <div className={'App-body'}>

          <Switch>
            <Route exact path="/" component={() => {
              return <FormHolder handleSignUpToggle={this.handleSignUpToggle} handleLoginToggle={this.handleLoginToggle} handleLogin={this.handleLogin} handleSignUp={this.handleSignUp} />
            }}
            />
            <Route exact path="/book_browser" component={() => {
              return (
                <Aux>
                  <Navbar handleLogOut={this.handleLogOut} />
                  <BookBrowser />
                </Aux>
              )
            }
            } />
          </Switch>

        </div>

      </div>
    );
  }
}

export default withRouter(App);
