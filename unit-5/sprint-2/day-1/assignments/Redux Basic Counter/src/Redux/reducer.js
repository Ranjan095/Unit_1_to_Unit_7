import { ADD, REDUCE } from "./actionTypes";

//Complete the reducer function logic inside the curly braces {}
const reducer = (state,{type,payload}) => {
    switch (type){
        case ADD:{
            console.log(state)
            return {...state,counter:state.counter+payload}
        };
        case REDUCE :{
            console.log(state)
            return{...state,counter:state.counter-payload}
        }
        default:{
            return state
        }
    }
};

export { reducer };
