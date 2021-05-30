import { combineReducers } from "redux";
import cartReducer from "./cart/reducers";
import productsReducer from "./products/reducers";

const reducers = {
  products: productsReducer,
  cart: cartReducer,
  // orders: ordersReducer,
};

export const reducer = combineReducers(reducers);
