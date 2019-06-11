import counter from "./reducers/counter";
import { combineReducers } from "redux";

// export default function combineReducers(state = {}, action) {
//   return {
//     counter: counter(state.counter, action)
//   };
// }

export default combineReducers({ counter });
