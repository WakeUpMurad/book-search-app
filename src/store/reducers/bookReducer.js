import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
} from '../actions/bookActions';

const initialState = {
    items: [],
    loading: false,
    error: null,
    totalItems: 0
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_BOOKS_SUCCESS:
            return {
                ...action.payload,
                loading: false,
                error: null,
            };
        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default bookReducer;
