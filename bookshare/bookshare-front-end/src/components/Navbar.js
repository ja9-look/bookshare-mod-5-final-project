import React from 'react';


const Navbar = (props) => {

    return(
        <div>
            <nav className="navbar">
                <ul>
                    <li className={'brand_name_li'}>bookshare</li>
                    <li>My Bookshelf</li>
                    <li>Books</li>
                </ul>
                <button className={'logout_button'} onClick={props.handleLogOut}>Logout</button>
            </nav>
        </div>
    )

}

export default Navbar;