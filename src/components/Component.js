import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import ErrorHandling from './ErrorHandling';
import { useDispatch } from 'react-redux';
import { fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure } from '../store/actions/bookActions';

const Component = ({ books }) => {
    const dispatch = useDispatch();

    const fetchData = () => {
        dispatch(fetchBooksRequest());

        // Make API request and dispatch appropriate actions based on success or failure
    };
    const error = useSelector((state) => state.books.error);

    return (
        <div className="your-component">
            {/* Your component content here */}
            {error && <ErrorHandling error={error} />}
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        books: state.books,
    }
};
export default connect(mapStateToProps, {fetchBooksRequest})(Component);
