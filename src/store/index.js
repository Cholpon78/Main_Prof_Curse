import { createStore, combineReducers, applyMiddleware } from "redux";
import{ thunk } from "redux-thunk";
import { categoryReducer } from "./categoryReducer";


const rootReducer = combineReducers({
  category: categoryReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
