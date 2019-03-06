import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import API from '../adapters/API';
import Aux from '../hoc/Aux';
import BookCard from '../components/BookCard';

class SearchResults extends Component{

    state = {
        books: [],
    }

    componentDidMount(){
        API.getAllBooks(this.props.match.params.searchTerm)
            .then((data) => {
                console.log(data)
                !data.error && 
                this.setState({books: data.items})
            })
    }

    render(){
        return(
            <Aux>
                {this.state.books.map(book =>
                    <BookCard key={book.id} book={book} handleAddToBookshelf={this.props.handleAddToBookshelf}/>
                )}
            </Aux>
        )
    }

}

export default withRouter(SearchResults);