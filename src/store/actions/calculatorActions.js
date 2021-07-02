import ActionTypes from "../../constants/ActionTypes"

const keyPress = (payload) => {
    return {
        type:ActionTypes.KEY_PRESS,
        payload
    }
}

const operationPress = (payload) => {
    return{
        type:ActionTypes.OPERATION_PRESS,
        payload
    }
}

const getResult = (payload) => {
    return{
        type:ActionTypes.GET_RESULT,
        payload
    }
}

const deleteChar = () => {
    return{
        type:ActionTypes.DELETE_CHAR
    }
}
const clearAll = () => {
    return{
        type:ActionTypes.CLEAR_ALL
    }
}

export {keyPress, operationPress, getResult, deleteChar, clearAll}