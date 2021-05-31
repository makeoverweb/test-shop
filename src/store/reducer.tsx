import { combineReducers } from "redux";
import shopReducer from "./shop/reducers";

const reducers = {
  shop: shopReducer,
};

export const reducer = combineReducers(reducers);
