import { createAsyncAction } from "typesafe-actions";
import { TProduct } from "./entities";

const GET_PRODUCTS_REQUEST = "@common/GET_PRODUCTS_REQUEST";
const GET_PRODUCTS_SUCCESS = "@common/GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_FAILURE = "@common/GET_PRODUCTS_FAILURE";
export const getProductsAction = createAsyncAction(
  [
    GET_PRODUCTS_REQUEST,
    (path: string, params?: any) => ({
      path,
      params,
    }),
  ],
  [GET_PRODUCTS_SUCCESS, (response: TProduct[]) => response],
  [GET_PRODUCTS_FAILURE, (error: Error) => error]
)();
