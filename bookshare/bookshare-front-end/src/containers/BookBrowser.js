import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router';

import SearchBar from '../components/SearchBar';
import SearchResults from './SearchResults';
import Categories from './Categories';
import BookDescription from '../components/BookDescription';

class BookBrowser extends Component {

    componentDidMount() {
        if (!localStorage.token) {
            this.props.history.push("/")
        }
    }

    handleSearchSubmit = (event) => {
        event.preventDefault()
        const searchTerm = event.target.searchTerm.value
        this.props.history.push(`/book_browser/${searchTerm}`)
    }

    render() {
        return(
            <div className={'contentArea'}>
                <video autoPlay loop className={'video-background'} muted playsInline>
                    <source src={require('../images/distant_lights.mp4')} type="video/mp4" />
                </video>
                <SearchBar handleSearchSubmit={this.handleSearchSubmit} />
                <div className={'booksBrowserWrapper'}>
                    <Switch>
                        <Route exact path="/book_browser" component={() => {
                            return(
                                <div className={'welcomeMessage'}>
                                    <h1>Welcome to <span>bookshare</span></h1>
                                    <h4>Begin your journey by searching for a book...</h4>
                                </div>
                            )
                        }}
                        />
                        <Route path="/book_browser/categories" component={() => {
                            return(
                                <Categories />
                            )
                        }} />                       
                        <Route exact path="/book_browser/books/:isbn" component={() => {
                            return(
                                <BookDescription />
                            )
                        }} />
                        <Route exact path="/book_browser/:searchTerm" component={() => {
                           return(
                               <SearchResults />
                           ) 
                        }} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(BookBrowser);