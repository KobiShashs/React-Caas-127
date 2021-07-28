import { combineReducers, createStore } from "redux";
import { catsReducer } from "./CatsState";

// Single Reducer
//const store = createStore(catsReducer);
//export default store;

// Multiple Reducers
const reducers = combineReducers({catState: catsReducer/* ,  next resource*/})
const store = createStore(reducers);

export default store;

