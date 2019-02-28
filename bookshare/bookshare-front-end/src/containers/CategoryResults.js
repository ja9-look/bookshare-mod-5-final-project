import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import API from '../adapters/API';

class CategoryResults extends Component {

    state={
        data: []
    }

    componentDidMount(){
        API.getAllBooks(this.props.match.params.category)
        .then(data => {
            this.setState({
                data
            })
        })
    }

    render(){
        console.log(`bookadiedooda:`, this.state.data)
        return(
            <div>
                <p>category results</p>
                <p>{this.props.match.params.category}</p>
            </div>
        )
    }

    
}

export default withRouter(CategoryResults);