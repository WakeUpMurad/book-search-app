// store/reducers/bookReducer.js

import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
} from '../actions/bookActions';

const initialState = {
    books: [],
    loading: false,
    error: null,
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null, // Clear any previous errors when starting a new request
            };
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                books: action.payload,
                error: null, // Clear any previous errors on success
            };
        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload, // Store the error message in the state
            };
        default:
            return state;
    }
};

export default bookReducer;
