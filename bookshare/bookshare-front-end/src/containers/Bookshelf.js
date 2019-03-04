import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../adapters/API';

class Bookshelf extends Component {

    state = {
        allBooks: []
    }

    componentDidMount = () => {
        if (this.props.currentUser) {
            API.getBookshelf(this.props.currentUser.user.bookshelf)
                .then(data => {
                    data.bookshelf.book_bookshelves.map(book => {
                        API.getBooksByIsbn(book.isbn)
                            .then(data =>
                                this.setState({
                                    allBooks: data.items
                                })
                            )
                    })
                })
        }
    }

    render() {

        const allBooksInfo = this.state.allBooks.map(book => book.volumeInfo)

        return (
            <div className={'booksBrowserWrapper'}>
                <div className={'contentArea'}>
                    <video autoPlay loop className={'video-background'} muted playsInline>
                        <source src={require('../images/distant_lights.mp4')} type="video/mp4" />
                    </video>
                    <div className={'bookshelfWelcome'}>
                        <h4>My bookshelf</h4>
                        {allBooksInfo.map(book => {
                            console.log(`book information:`, book)
                            return (
                                <Link to={book.industryIdentifiers ? `/book_browser/books/${book.industryIdentifiers[0].identifier}` : "/"} style={{ textDecoration: 'none', color: '#000000' }} >
                                    <div className={'bookCardWrapper'} id={book.industryIdentifiers ? book.industryIdentifiers[0].identifier : null} onClick={this.handleBookClick}>
                                        <img className={'bookImage'} src={book.imageLinks ? book.imageLinks.thumbnail : "https://data.europa.eu/euodp/sites/all/themes/openDataPortalTheme/images/no-image-icon.png"} alt={book.title} />
                                        <h6 className={'bookTitle'}>{book.title ? (book.title.length > 20 ? book.title.substring(0, 20) + `...` : book.title) : "(No Title Available)"}</h6>
                                        <p className={'bookAuthor'}>{book.authors ? book.authors[0] : "(No Author Available)"}</p>
                                        <p className={'bookDescription'}>{book.description ? (book.description.length > 150 ? book.description.substring(0, 150) + `...` : book.description) : "(No description available)"}</p>
                                        <img className={'addToFavourites'} src={require("../images/heart.png")} />
                                    </div>
                                </Link>
                            )
                        }
                        )}
                    </div>

                </div>
            </div>
        )
    }

}

export default Bookshelf;