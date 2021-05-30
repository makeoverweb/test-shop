import { TStateCart } from "./cart/entities";
import { TStateProducts } from "./products/entities";

export interface TState {
  products: TStateProducts;
  cart: TStateCart;
  orders: any;
};
