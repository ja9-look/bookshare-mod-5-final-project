import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import API from '../adapters/API';
import BookCard from '../components/BookCard';

class CategoryResults extends Component {

    state={
        booksByCategory: []
    }

    componentDidMount(){
        API.getAllBooks(this.props.match.params.category)
        .then(data => {
            this.setState({
                booksByCategory: data.items
            })
        })
    }

    render(){
        return(
            <div className={'categoryResultsBrowser'}>
                <h4>{this.props.match.params.category}</h4>
                <div className={'booksBrowserWrapper'}>
                    {this.state.booksByCategory.map(book => 
                        <BookCard book={book} handleAddToBookshelf={this.props.handleAddToBookshelf}/>
                    )}
                </div>
            </div>
        )
    }

    
}

export default withRouter(CategoryResults);