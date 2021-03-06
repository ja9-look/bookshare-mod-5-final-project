import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class BookCard extends Component {

    render() {

        const book = this.props.book.volumeInfo
        const industryIdentifiers = book.industryIdentifiers

        return(
            <Link to={ industryIdentifiers ? `/book_browser/books/${industryIdentifiers[0].identifier}` :  "/" } style={{ textDecoration: 'none', color: '#000000' }} >
                <div className={'bookCardWrapper'} id={industryIdentifiers ? book.industryIdentifiers[0].identifier : "" }>
                    <img className={'bookImage'} src={book.imageLinks ? book.imageLinks.thumbnail : "https://data.europa.eu/euodp/sites/all/themes/openDataPortalTheme/images/no-image-icon.png"} alt={book.title}/>
                    <div className={'bookCardContent'}>
                        <h6 className={'bookTitle'}>{book.title ? (book.title.length > 20 ? book.title.substring(0, 20) + `...` : book.title) : "(No Title Available)"}</h6>
                        <p className={'bookAuthor'}>{book.authors ? book.authors[0] : "(No Author Available)"}</p>
                        <p className={'bookRating'}>{book.averageRating ? `Rating: ${book.averageRating}/5` : "(No Rating Available)" }</p>
                        <p className={'bookDescription'}>{book.description ? (book.description.length > 100 ? book.description.substring(0, 100)+`...` : book.description) : "(No description available)"}</p>
                    </div>
                    <button className={'addToBookshelfButton'} onClick={this.props.handleAddToBookshelf}> + Bookshelf</button>
                </div>
            </Link>
        )
    }
}

export default BookCard;