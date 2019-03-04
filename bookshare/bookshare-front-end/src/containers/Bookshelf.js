import React, { Component } from 'react';
import API from '../adapters/API';

class Bookshelf extends Component {

    state={
        allBooks: [],

    }

    componentDidMount = () => {
        if (this.props.currentUser) {
            API.getBookshelf(this.props.currentUser.user.bookshelf)
            .then(data => {
                this.setState({
                    allBooks: data.bookshelf.book_bookshelves
                })
            })
        }
    }

    render(){

        console.log(`books:`, this.state.allBooks)

        return(
            <div className={'contentArea'}>
                <video autoPlay loop className={'video-background'} muted playsInline>
                    <source src={require('../images/distant_lights.mp4')} type="video/mp4" />
                </video>
                <div className={'bookshelfWelcome'}>
                    <h4>My bookshelf</h4>
                </div>

            </div>
        )
    }

}

export default Bookshelf;