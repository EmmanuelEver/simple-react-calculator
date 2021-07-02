import ActionTypes from "../../constants/ActionTypes";

const initialState = {theme: window.localStorage.getItem("theme") || "theme1"};

const themeReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.CHANGE_THEME:
            if(state.theme === "theme1") return {...state, theme:"theme2"}
            else if(state.theme === "theme2") return {...state, theme:"theme3"}
            else return {...state, theme:"theme1"}
    }
    return state;
}

export default themeReducer;