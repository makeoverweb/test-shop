import { createAsyncAction } from "typesafe-actions";
import { TProduct } from "../products/entities";

const GET_CART_REQUEST = "@common/GET_CART_REQUEST";
const GET_CART_SUCCESS = "@common/GET_CART_SUCCESS";
const GET_CART_FAILURE = "@common/GET_CART_FAILURE";
export const getCartAction = createAsyncAction(
  [
    GET_CART_REQUEST,
    (path: string, params?: any) => ({
      path,
      params,
    }),
  ],
  [GET_CART_SUCCESS, (response: TProduct[]) => response],
  [GET_CART_FAILURE, (error: Error) => error]
)();
