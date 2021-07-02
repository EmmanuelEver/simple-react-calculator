import { combineReducers } from "redux";
import calculatorReducer from "./calculatorReducer";
import themeReducer from "./themeReducer";

const reducers = combineReducers({
    theme:themeReducer,
    calculator:calculatorReducer
})

export default reducers;