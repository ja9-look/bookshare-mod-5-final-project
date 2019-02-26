import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../hoc/Aux';


const Navbar = (props) => {

    return(
        <Aux>
            <nav className="navbar">
                <ul>
                    <Link to="/book_browser"><li className={'brand_name_li'}>bookshare</li></Link>
                    <Link to={props.currentUser ? `/bookshelves/${props.currentUser.bookshelf}` : '/'}><li>MY BOOKSHELF</li></Link>
                    <li>CATEGORIES</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <Link to="/"><button className={'logout_button'} onClick={props.handleLogOut}>Logout</button></Link>
            </nav>
        </Aux>
    )

}

export default Navbar;