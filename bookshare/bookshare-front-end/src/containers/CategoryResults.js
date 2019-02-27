import React, {Component} from 'react';

class CategoryResults extends Component {

    state={
        booksByCategory: []
    }

    handleGetBooksByCategory = (category) => {
        API.getBooksByCategory(category)
            .then(data => this.setState({
                booksByCategory: data.items
            }))
    }



    
}

export default CategoryResults;