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
                    .then(data => {
                        this.setState({
                            allBooks: [...this.state.allBooks.concat([data.items[0].volumeInfo])]
                        })
                    }
                    )
                })
            })
        }
    }

    handleReadClick = (event) => {
        event.preventDefault()
        console.log(event.target.parentElement.id)
        document.querySelector('.readButton').classList.toggle('focus')
        
    }
    

    render() {
        return (
            <div className={'bookshelfBrowserWrapper'}>
                <div className={'contentArea'}>
                    <video autoPlay loop className={'video-background'} muted playsInline>
                        <source src={require('../images/distant_lights.mp4')} type="video/mp4" />
                    </video>
                        <h4>My bookshelf</h4>
                    <div className={'booksBrowserWrapper'}>
                        {this.state.allBooks.map(book => {
                            return (
                                <Link to={book.industryIdentifiers ? `/book_browser/books/${book.industryIdentifiers[0].identifier}` : "/"} style={{ textDecoration: 'none', color: '#000000' }} >
                                    <div className={'bookCardWrapper'}>
                                        <img className={'bookImage'} src={book.imageLinks ? book.imageLinks.thumbnail : "https://data.europa.eu/euodp/sites/all/themes/openDataPortalTheme/images/no-image-icon.png"} alt={book.title} />
                                        <h6 className={'bookTitle'}>{book.title ? (book.title.length > 20 ? book.title.substring(0, 20) + `...` : book.title) : "(No Title Available)"}</h6>
                                        <p className={'bookAuthor'}>{book.authors ? book.authors[0] : "(No Author Available)"}</p>
                                        <img alt="favourite" className={'addToFavourites'} src={require("../images/heart.png")} />
                                        <button className={'readButton'} onClick={this.handleReadClick}>Read</button>
                                        <button className={'boughtButton'} onClick={this.handleBoughtClick}>Bought</button>
                                        <button className={'removeButton'} onClick={this.handleRemoveClick}>Remove</button>
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