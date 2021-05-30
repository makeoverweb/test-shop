import { TState } from "../entities";

export const getCartData = (state: TState) => state.cart.data;

export const getCartLoading = (state: TState) => state.cart.loading;

export const getCartError = (state: TState) => state.cart.error;
