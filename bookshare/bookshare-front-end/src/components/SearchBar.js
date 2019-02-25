import React from 'react';

const SearchBar = (props) => {

    return(
        <form className={'searchBarForm'} onSubmit={props.handleSearchSubmit}>
            <input type="text" name="searchTerm" placeholder="Book Name, ISBN..."/>
            <input type="submit" name="Search" value="Search" />
        </form>
    )
}

export default SearchBar;