import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const initial_state = {};
const middleware = [thunk];

const store = createStore(
    initial_state,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;