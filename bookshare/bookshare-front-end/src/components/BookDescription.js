import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import API from '../adapters/API';


class BookDescription extends Component{

    state={
        booksByIsbn: []
    }

    componentDidMount() {
        API.getFromGoogle(this.props.match.params.isbn)
        .then(data => this.setState({
            booksByIsbn : data.i
        }))
    }

    render(){

        console.log(this.props.match.params.isbn)

        return(
            <div>
                <p>book description</p>
                <p>{this.props.match.params.isbn}</p>
            </div>
        )
    }
}

export default withRouter(BookDescription);