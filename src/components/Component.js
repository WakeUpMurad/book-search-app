import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import ErrorHandling from './ErrorHandling';
import { useDispatch } from 'react-redux';
import { fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure } from '../store/actions/bookActions';

const YourComponent = ({ books }) => {
    const dispatch = useDispatch();

    const fetchData = () => {
        dispatch(fetchBooksRequest());

        // Make API request and dispatch appropriate actions based on success or failure
    };
    const error = useSelector((state) => state.books.error);

    const mapStateToProps = (state) => {
        return (
            <div className="your-component">
                {/* Your component content here */}
                {error && <ErrorHandling error={error} />}
            </div>
        )

    };
};

export default connect(mapStateToProps)(YourComponent);
