import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import combinedReducers from "./modules"
import thunk from "redux-thunk";
const initial_state = {};
const middleware = [thunk];

const store = createStore(
    combinedReducers,
    initial_state,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;