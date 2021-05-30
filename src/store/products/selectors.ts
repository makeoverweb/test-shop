import { TState } from "../entities";

export const getProductsData = (state: TState) => state.products.data;

export const getProductsLoading = (state: TState) => state.products.loading;

export const getProductsError = (state: TState) => state.products.error;
