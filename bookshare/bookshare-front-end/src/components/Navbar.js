import React from 'react';

import Aux from '../hoc/Aux';


const Navbar = (props) => {

    return(
        <Aux>
            <nav className="navbar">
                <ul>
                    <li className={'brand_name_li'}>bookshare</li>
                    <li>MY BOOKSHELF</li>
                    <li>BOOKS</li>
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