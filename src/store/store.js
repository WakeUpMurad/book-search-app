import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // Import your root reducer
import thunk from 'redux-thunk'; // Middleware for async actions

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
