import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router';

import API from '../adapters/API';
import Aux from '../hoc/Aux';
import SearchBar from '../components/SearchBar';
import SearchResults from './SearchResults';

class BookBrowser extends Component {

    componentDidMount() {
        // if (!this.state.books.length){
        //     API.getAllBooks('sad')
        //     .then((data) => this.setState({
        //         books: data
        //     }))
        // }
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
                <SearchBar handleSearchSubmit={this.handleSearchSubmit} />
                <div className={'booksBrowserWrapper'}>
                    <Switch>
                        <Route exact path="/book_browser/:searchTerm">
                            <SearchResults />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(BookBrowser);