import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import API from '../adapters/API';
import Aux from '../hoc/Aux';
import BookCard from '../components/BookCard';

class SearchResults extends Component{

    state = {
        books: []
    }

    componentDidMount(){
        API.getAllBooks(this.props.match.params.searchTerm)
            .then((data) => this.setState({
                books: data.items
            })
        )
    }

    render(){
        return(
            <Aux>
                {this.state.books.map(book =>
                    <BookCard key={book.id} book={book} />
                )}
            </Aux>
        )
    }

}

export default withRouter(SearchResults);