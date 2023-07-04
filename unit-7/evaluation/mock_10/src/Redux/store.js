/** @format */

import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { reducer } from "./Login/reducer";
import { bugReducer } from "./Bug/bugReducer";

const rootReducer = combineReducers({
loginReducer:reducer,
bugreducer:bugReducer
});

export let store = legacy_createStore(rootReducer, applyMiddleware(thunk));
