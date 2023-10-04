import React, {useEffect, useState} from 'react';
import BookCard from '../BookCard/BookCard';

const SearchResults = ({books, totalResults}) => {
    const [booksArr, setBooksArr] = useState([])
    const [totalCount, setTotalCount] = useState(0)

    useEffect(() => {
        setBooksArr(books)
        console.log(books)
        setTotalCount(totalResults)
    }, [books]);

    return (
        <div className="search-results">
            <h2>Search Results</h2>
            <p>Total Books Found: {totalCount}</p>
            <div className="book-list">
               {booksArr.length === 0
                    ?
                    <h3>Книги не найдены</h3>
                    :
                    booksArr.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </div>
    );
};
export default SearchResults;



