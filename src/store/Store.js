import { legacy_createStore as createStore } from "redux";
import TodoReducers from "../reducers/TodoReducers";

let Store = createStore(TodoReducers)

export default Store;