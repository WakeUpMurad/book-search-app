import React, {useEffect} from 'react';
import SearchBar from '../components/SearchBar/SearchBar'
import SearchResults from '../components/SearchResults/SearchResults'
import {connect} from "react-redux";
import {fetchBooksRequest} from "../store/actions/bookActions";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ErrorHandling from "../components/ErrorHandling";

const SearchPage = ({items, totalItems}) => {
    const dispatch = useDispatch();
    const fetchData = () => {
        dispatch(fetchBooksRequest());
    };
    useEffect(() => {
        console.log(items)
    }, []);

    const error = useSelector((state) => state.error);

    return (
        <div className="searchPage">
            <h1>Search for books</h1>
            <SearchBar />
            <SearchResults books={items} totalResults={totalItems} />
            {error && <ErrorHandling error={error} />}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        items: state.books.items,
        totalItems: state.books.totalItems
    }
};
export default connect(mapStateToProps, {fetchBooksRequest})(SearchPage);
