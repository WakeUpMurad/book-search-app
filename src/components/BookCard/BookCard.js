import React from 'react';

const BookCard = ({ book }) => {
    const { title, authors, categories, imageLink } = book;

    return (
        <div className="book-card">
            <img src={imageLink} alt={`Cover for ${title}`} />
            <div className="book-details">
                <h3>{title}</h3>
                <p>Category: {categories.length > 0 ? categories[0] : 'N/A'}</p>
                <p>Authors: {authors.join(', ')}</p>
            </div>
        </div>
    );
};

export default BookCard;
