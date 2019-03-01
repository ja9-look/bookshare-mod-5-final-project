import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import API from '../adapters/API';


class BookDescription extends Component{

    state = {
        data: []
    }

    componentDidMount(){
        API.getBooksByIsbn(this.props.match.params.isbn)
        .then(data => this.setState({
            data
        })
        )
    }

    render(){

        const book = this.state.data.items
        console.log(`books:`, book)
        return(
        book ? 
                <div className="bookDetails">
                    <img alt={book[0].volumeInfo.title} src={book[0].volumeInfo.imageLinks ? book[0].volumeInfo.imageLinks.thumbnail : "https://data.europa.eu/euodp/sites/all/themes/openDataPortalTheme/images/no-image-icon.png"} />
                    <h4>{book[0].volumeInfo.title}</h4>
                    <h6>ISBN: {this.props.match.params.isbn}</h6>
                    <h6>{book[0].volumeInfo.authors ? book[0].volumeInfo.authors.map(author => `| ${author} |`) : `(No Description Available)`}</h6>
                    <p>{book[0].volumeInfo.description}</p>
                </div>
            : 
            null
        )      
        
    }
}

export default withRouter(BookDescription);