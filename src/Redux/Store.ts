import { combineReducers, createStore } from "redux";
import { authReducer } from "./AuthState";
import { catsReducer } from "./CatsState";

// Single Reducer
//const store = createStore(catsReducer);
//export default store;

// Multiple Reducers
const reducers = combineReducers({catState: catsReducer,authState: authReducer})
const store = createStore(reducers);

export default store;

