import { createStore, combineReducers } from "redux";
import passwordReducer from "./reducers";
const rootReducer = combineReducers({
  passwordReducer: passwordReducer,
});

export const store = createStore(rootReducer);
