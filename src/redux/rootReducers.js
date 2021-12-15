import {combineReducers} from "redux";
import {todoReducer} from "./todoReducer";
import {exchangeReducer} from "./exchangeReducer/reducer";

export default combineReducers({
    todoReducer,
    exchangeReducer
});