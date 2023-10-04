import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { searchBooks } from '../../store/actions/bookActions';
import searchImg from '../../assets/icons/search-icon.svg'
const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

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
            <label>
                <input
                    type="text"
                    placeholder="Search for books"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch} >
                    <img src={searchImg} alt={'img'}/>
                </button>
            </label>
            <label>
                Categories:
                <select>
                    <option>all</option>
                    <option>art</option>
                    <option>biography</option>
                    <option>computers</option>
                    <option>history</option>
                    <option>medical</option>
                    <option>poetry</option>
                </select>
            </label>
            <label>
                Sorting by:
                <select>
                    <option>relevance</option>
                    <option>newest</option>
                </select>
            </label>
        </div>
    );
};

export default SearchBar;
