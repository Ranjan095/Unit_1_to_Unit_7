import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

let initialState={
    todos:[],
    isLoading:false,
    isErr:false
}

export let store=legacy_createStore(reducer,initialState)