import RootReducer from "../Reducer/RootReducer.js";
import {createStore , applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

const Store = createStore(RootReducer , applyMiddleware(thunkMiddleware));

export default Store;