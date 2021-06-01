import { TState } from "../entities";

export const getProductsData = (state: TState) => state.shop.products.data;

export const getProductsLoading = (state: TState) =>
  state.shop.products.loading;

export const getProductsError = (state: TState) => state.shop.products.error;

export const getCartData = (state: TState) => state.shop.cart.data;

export const getCartTotal = (state: TState) =>
  state.shop.cart.data.map((el) => el.price);

export const getOrdersData = (state: TState) => state.shop.orders.data;
