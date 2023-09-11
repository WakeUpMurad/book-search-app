import React from 'react';
import BookCard from '../BookCard/BookCard'; // Assuming you have a BookCard component

const SearchResults = ({ books, totalResults }) => {
    return (
        <div className="search-results">
            <h2>Search Results</h2>
            <p>Total Books Found: {totalResults}</p>
            <div className="book-list">
                {books.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
