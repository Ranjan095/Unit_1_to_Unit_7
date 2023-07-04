import { combineReducers, legacy_createStore } from "redux";
import { themeReducer }from './themeReducer'
import { counterReducer } from './counterReducer'

let rootReducer=combineReducers({
    theme:themeReducer,
    counter:counterReducer
})

export let store=legacy_createStore(rootReducer)