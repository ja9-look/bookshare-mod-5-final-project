import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CategoryResults from './CategoryResults';

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
                <Switch>
                    <Route exact path="/book_browser/categories" component={() => {
                        return this.state.bookCategories.map(category => {
                            return (
                                <Link to={`/book_browser/categories/${category}`}>
                                    <div className={`categoryCard ${category}`}>
                                        <img alt={category} src={require(`../images/${category}.jpg`)} />
                                        <p>{category}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }} />
                    <Route path="/book_browser/categories/:category" component={() => {
                        return (
                            <CategoryResults />
                        )
                    }}
                    />
                </Switch>
            </div>
        )
    }

}

export default Categories;