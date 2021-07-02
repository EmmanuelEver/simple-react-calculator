import ActionTypes from "../../constants/ActionTypes";

const initialState = {
    result:"",
    expString:"",
    disableOperation:false
}

const calculatorReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.KEY_PRESS:
            return {...state, result:"", expString:state.expString.concat(payload), disableOperation:false}
        case ActionTypes.OPERATION_PRESS:
            return {...state, result:"", expString:state.expString.concat(` ${payload} `), disableOperation:true}
        case ActionTypes.GET_RESULT:
            return{...state, result:payload, disableOperation:false}
        case ActionTypes.DELETE_CHAR:
            let lastChar = state.expString.slice(-1)
            if(lastChar === "." ) return {...state, expString: state.expString.slice(0, state.expString.length - 1)}
            else if(isNaN(lastChar) || lastChar === " ") return {...state, expString: state.expString.slice(0, state.expString.length - 2)}
            else return {...state, expString: state.expString.slice(0, state.expString.length - 1)}
        case ActionTypes.CLEAR_ALL:
            return { ...state, result:"", expString:"", disableOperation:false}
    }
    return state;
}

export default calculatorReducer;