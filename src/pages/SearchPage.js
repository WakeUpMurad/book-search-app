import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar'
import CategorySelector from '../components/CategorySelector/CategorySelector'
import SortingSelector from '../components/SortingSelector/SortingSelector'
import SearchResults from '../components/SearchResults/SearchResults'
import Pagination from '../components/Pagination/Pagination'

const SearchPage = () => {
    return (
        <div className="searchPage">
            <h1>Search for books</h1>
            <SearchBar />
            <CategorySelector />
            <SortingSelector />
            <SearchResults />
            <Pagination />
        </div>
    );
};

export default SearchPage;
