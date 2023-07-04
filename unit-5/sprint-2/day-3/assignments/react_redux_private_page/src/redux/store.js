import { combineReducers, legacy_createStore } from "redux";
import { reducer as counterReducer } from "./Counter/reducer";
import { reducer as todoReducer } from "./todo/reducer";
import { reducer as loginReducer } from "./login/reducer";

let rootReducer=combineReducers({
    counter:counterReducer,
    todo:todoReducer,
    login:loginReducer
})

// let initialState={
//     counter:10,
//     todo:[],
//     isLoading:false,
//     isErr:false
// }

export let store=legacy_createStore(rootReducer)