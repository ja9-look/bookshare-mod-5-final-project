import React, { Component } from 'react';
import API from '../adapters/API';

class Bookshelf extends Component {

    state={
        allBooks: [],
        read: [],
        bought: [],
        to_read: [],
        favourites: []
    }

    componentDidMount = () => {
        if (this.props.currentUser) {
            API.getBookshelf(this.props.currentUser.bookshelf)
            .then(data => {
                console.log(data)
            })
            console.log(`user:`, this.props.currentUser)
        }
    }

    render(){

        console.log(`user:`, this.props.currentUser)

        return(
            <div className={'contentArea'}>
                <video autoPlay loop className={'video-background'} muted playsInline>
                    <source src={require('../images/distant_lights.mp4')} type="video/mp4" />
                </video>
                <div className={'favouriteBooks'}>
                    <h2>Favourites</h2>
                </div>

                <div className={'readBooks'}>
                    <h2>Read</h2>
                </div>

                <div className={'booksToBuy'}>
                    <h2>To Buy</h2>
                </div>

                <div className={'booksToRead'}>
                    <h2>To Read</h2>
                </div>
            </div>
        )
    }

}

export default Bookshelf;