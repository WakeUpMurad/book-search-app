// store/actions/bookActions.js

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

export const fetchBooksRequest = () => ({
    type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = (state) => ({
    type: FETCH_BOOKS_SUCCESS,
    payload: state,
});

export const fetchBooksFailure = (error) => ({
    type: FETCH_BOOKS_FAILURE,
    payload: error,
});
export const searchBooks = (query) => {
    return async (dispatch) => {
        try {
            dispatch(fetchBooksRequest());
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBfPxAUt4A1zpmU1AxDtsiWaWyAYqQQP6g`);
            const data = await response.json();
            dispatch(fetchBooksSuccess(data));
        } catch (error) {
            dispatch(fetchBooksFailure(error));
        }
    };
};