import { createAsyncAction, createAction } from "typesafe-actions";
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

const GET_ORDERS_REQUEST = "@common/GET_ORDERS_REQUEST";
const GET_ORDERS_SUCCESS = "@common/GET_ORDERS_SUCCESS";
const GET_ORDERS_FAILURE = "@common/GET_ORDERS_FAILURE";
export const getOrdersAction = createAsyncAction(
  [
    GET_ORDERS_REQUEST,
    (path: string, params?: any) => ({
      path,
      params,
    }),
  ],
  [
    GET_ORDERS_SUCCESS,
    (response: { userName: string; userPhone: string; products: TProduct[] }) =>
      response,
  ],
  [GET_ORDERS_FAILURE, (error: Error) => error]
)();

const ADD_TO_CART = "@common/ADD_TO_CART";
export const addToCart = createAction(ADD_TO_CART, (item: TProduct) => item)();

const DELETE_FROM_CART = "@common/DELETE_FROM_CART";
export const deleteFromCart = createAction(
  DELETE_FROM_CART,
  (id: string) => id
)();

const ADD_ORDER_REQUEST = "@common/ADD_ORDER_REQUEST";
const ADD_ORDER_SUCCESS = "@common/ADD_ORDER_SUCCESS";
const ADD_ORDER_FAILURE = "@common/ADD_ORDER_FAILURE";
export const addOrderAction = createAsyncAction(
  [ADD_ORDER_REQUEST, (path: string, data: any) => ({ path, data })],
  [ADD_ORDER_SUCCESS, (response: any) => response],
  [ADD_ORDER_FAILURE, (error: Error) => error]
)();

// const ADD_ORDER = "@common/ADD_ORDER";
// export const addToOrders = createAction(
//   ADD_ORDER,
//   ({
//     products,
//     userName,
//     userPhone,
//   }: {
//     products: TProduct[];
//     userName: string;
//     userPhone: string;
//   }) => ({
//     products,
//     userName,
//     userPhone,
//   })
// )();
