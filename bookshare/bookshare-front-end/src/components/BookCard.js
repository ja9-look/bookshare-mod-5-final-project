import React, {Component} from 'react';

class BookCard extends Component {

    render() {

        const book = this.props.book.volumeInfo

        return(
            <div className={'bookCardWrapper'}>
                <img className={'bookImage'} src={book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "(No Image Available)"} alt={book.title}/>
                <h5 className={'bookTitle'}>{book.title ? book.title : "(No Title Available)"}</h5>
                <p className={'bookPublishDate'}>{book.publishedDate ? book.publishedDate : "(No Published Date Available)"}</p>
                <p className={'bookDescription'}>{book.description ? (book.description.length > 150 ? book.description.substring(0, 150)+`...` : book.description) : "(No description available)"}</p>
            </div>
        )
    }
}

export default BookCard;