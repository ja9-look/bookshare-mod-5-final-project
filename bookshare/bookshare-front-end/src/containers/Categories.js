import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categories extends Component{

    state = {
        bookCategories: [
            "art",
            "biography",
            "business",
            "comics",
            "crafts",
            "culinary",
            "education",
            "entertainment",
            "fantasy",
            "fiction",
            "fitness",
            "history",
            "horror",
            "language",
            "literature",
            "math",
            "medical",
            "mystery",
            "travel",
            "religion",
            "romance",
            "science",
            "self-help",
            "technology"
        ]
    }

    render() {

        return(
            <div className="categoryBrowser">
                {this.state.bookCategories.map(category => {
                    return (
                    <Link to={`/book_browser/categories/${category}`}>
                        <div className={`categoryCard ${category}`}>
                            <p>{category}</p>
                        </div>
                    </Link>
                    )
                })}
            </div>
        )
    }

}

export default Categories;