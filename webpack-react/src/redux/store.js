import { createStore } from "redux";
import rootReducer from "./reducer.js";

let store = createStore(rootReducer);
console.log(store.getState(), "store");
export default store;
