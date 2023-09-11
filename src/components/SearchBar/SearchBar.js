import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchBooks } from '../../store/actions/bookActions'; // Assuming you have an action for searching books

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        if (query.trim() !== '') {
            // Dispatch the searchBooks action with the user's query
            dispatch(searchBooks(query));
        }
    };

    const handleKeyPress = (event) => {
        // Trigger search when Enter key is pressed
        if (event.key === 'Enter' && query.trim() !== '') {
            dispatch(searchBooks(query));
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for books"
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
