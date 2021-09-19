import { combineReducers } from "redux";
import reducer from "./reducer";
import loadReducer from "./loadReducer";

export const rootReducer = combineReducers({
    reducer,
    loadReducer  
});