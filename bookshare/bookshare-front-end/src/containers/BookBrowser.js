import React, {Component} from 'react';
import { withRouter } from 'react-router';

import API from '../adapters/API';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';

class BookBrowser extends Component {

    state = {
        books: []
    }

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
        API.getAllBooks(searchTerm)
        .then((data) => this.setState({
            books: data.items
        })
        )
    }

    render() {
        return(
            <div className={'contentArea'}>
                <SearchBar handleSearchSubmit={this.handleSearchSubmit} />
                <div className={'booksBrowserWrapper'}>
                    {this.state.books.map(book => 
                        <BookCard key={book.id} book={ book }/>  
                    )}
                </div>
            </div>
        )
    }
}

export default withRouter(BookBrowser);