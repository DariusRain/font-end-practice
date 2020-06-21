import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import combinedReducers from "./modules"
import thunk from "redux-thunk";
const initialState = {};
const middleware = [thunk];

const store = createStore(
    combinedReducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;