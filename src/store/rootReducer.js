// src/store/rootReducer.js

import { combineReducers } from 'redux';
import bookReducer from './reducers/bookReducer';

const rootReducer = combineReducers({
    books: bookReducer,
    // Add more reducers if needed
});

export default rootReducer;
