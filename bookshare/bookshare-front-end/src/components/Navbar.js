import React from 'react';

import Aux from '../hoc/Aux';


const Navbar = (props) => {

    return(
        <Aux>
            <nav className="navbar">
                <ul>
                    <li className={'brand_name_li'}><a href="/book_browser" >bookshare</a></li>
                    <li>MY BOOKSHELF</li>
                    <li>CATEGORIES</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <button className={'logout_button'} onClick={props.handleLogOut}>Logout</button>
            </nav>
        </Aux>
    )

}

export default Navbar;