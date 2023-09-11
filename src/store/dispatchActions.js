import { useDispatch } from 'react-redux';
import { fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure } from '../store/actions/bookActions';

const fetchBooks = async () => {
    const dispatch = useDispatch();

    dispatch(fetchBooksRequest());

    try {
        // Perform API request
        const response = await apiCall();

        // Dispatch success action with data
        dispatch(fetchBooksSuccess(response.data));
    } catch (error) {
        // Dispatch failure action with error
        dispatch(fetchBooksFailure(error));
    }
};
