import React from 'react';

const BookCard = ({ book }) => {

    console.log(book)

    return (
        <div className="book-card">
            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={`Cover for ${book.volumeInfo.title}`} />
            <div className="book-details">
                <h3> {book.volumeInfo.categories}</h3>
                <h4>{book.volumeInfo.title}</h4>
                <h4>{book.volumeInfo.authors}</h4>
            </div>
        </div>
    );
};

export default BookCard;
