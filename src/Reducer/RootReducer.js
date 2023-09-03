import UserReducer from "./UserReducer.js";
import {combineReducers } from "redux";
import PostReducer from "./PostMakerReducer.js";

const RootReducer = combineReducers({
   UserReducer : UserReducer,
   PostReducer : PostReducer,
})

export default RootReducer;