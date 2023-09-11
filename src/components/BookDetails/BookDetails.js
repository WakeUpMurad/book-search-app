import React from 'react';

const BookDetails = ({ book }) => {
    const { title, authors, categories, imageLink, description } = book;

    return (
        <div className="book-details">
            <h2>{title}</h2>
            <div className="book-info">
                <img src={imageLink} alt={`Cover for ${title}`} />
                <div className="details">
                    <p><strong>Authors:</strong> {authors.join(', ')}</p>
                    <p><strong>Categories:</strong> {categories.join(', ')}</p>
                </div>
            </div>
            <div className="description">
                <h3>Description:</h3>
                <p>{description || 'No description available.'}</p>
            </div>
        </div>
    );
};

export default BookDetails;
