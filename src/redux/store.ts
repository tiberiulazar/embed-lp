import { createStore, combineReducers, applyMiddleware } from "redux";
import { checkboxesReducer } from "./reducer";

const rootReducer = combineReducers({
  data: checkboxesReducer,
});

const store = createStore(rootReducer);

export default store;
