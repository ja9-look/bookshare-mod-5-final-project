import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router'

import API from './adapters/API';
import Navbar from './components/Navbar';
import BookBrowser from './containers/BookBrowser';
import Bookshelf from './containers/Bookshelf';
import FormHolder from './containers/FormHolder';
import Aux from './hoc/Aux';


import './App.css';

class App extends Component {

  state = {
    currentUser: ''
    }

  componentDidMount() {
    if (localStorage.token) {
      API.getCurrentUser()
        .then(data => {
          this.setState({
            currentUser: data
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
      .then( data => {
        if (data.message){
          this.props.history.push("/")
        }
        else {
          this.login(data)
          this.setState({
            currentUser: data
          })
        }
      })
      event.target.username.value = ''
      event.target.password.value = ''
  }

  login = (data) => {
    localStorage.setItem('token', data.jwt)
    this.props.history.push("/book_browser")
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
        if(data.error) {
          this.props.history.push("/")
        }
        else {
          this.login(data)
          this.props.history.push("/book_browser")
          this.setState({
            currentUser : data
          })
        }
      })
  }

  handleLogOut = () => {
    localStorage.removeItem('token')
    this.setState({
      currentUser: '',
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

  handleAddToBookshelf = (event) => {
    event.preventDefault()
    const isbn = event.target.parentElement.id
    const bookshelf_id = this.state.currentUser.user.bookshelf
    API.addBookToBookshelf(bookshelf_id, isbn).then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
      
        <div className={'App-body'}>

          <Switch>
            <Route exact path="/" component={() => {
              return <FormHolder handleSignUpToggle={this.handleSignUpToggle} handleLoginToggle={this.handleLoginToggle} handleLogin={this.handleLogin} handleSignUp={this.handleSignUp} />
            }}
            />
            <Route path="/book_browser" component={() => {
              return (
                <Aux>
                  <Navbar handleLogOut={this.handleLogOut} currentUser={this.state.currentUser}/>
                  <BookBrowser handleAddToBookshelf={this.handleAddToBookshelf} currentUser={this.state.currentUser}/>
                </Aux>
              )
            }
            } />
            { this.state.currentUser ?
              <Route path={`/bookshelves/${this.state.currentUser.user.bookshelf}`} component={() => {
                return (
                  <Aux>
                    <Navbar handleLogOut={this.handleLogOut} currentUser={this.state.currentUser} />
                    <Bookshelf currentUser={this.state.currentUser} />
                  </Aux>
                )
              }} />
              :
              null
            }
          </Switch>

        </div>

      </div>
    );
  }
}

export default withRouter(App);
