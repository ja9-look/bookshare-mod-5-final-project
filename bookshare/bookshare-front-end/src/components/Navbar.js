import React from 'react';
import bookshare_logo from '../images/bookshare_logo.png';


const Navbar = (props) => {

    return(
        <div>
            <nav className="navbar">
                <ul>
                    <li><img className={'App-navbar-logo'} src={bookshare_logo} alt="Bookshare Logo" /></li>
                    <li>My Bookshelf</li>
                    <li>Books</li>
                </ul>
                <button className={'logout_button'} onClick={props.handleLogOut}>Logout</button>
            </nav>
        </div>
    )

}

export default Navbar;