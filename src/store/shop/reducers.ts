import { TProduct } from "store/shop/entities";
import { createReducer, getType } from "typesafe-actions";
import { addToCart, getProductsAction, deleteFromCart } from "./actions";
import { TStateShop } from "./entities";

const initialState: TStateShop = {
  products: { data: [], loading: false, error: null },
  cart: { data: [], loading: false, error: null, total: 0 },
  orders: { data: [], loading: false, error: null },
};
const shopReducer = createReducer<TStateShop>(initialState, {
  [getType(getProductsAction.request)]: (state) => ({
    ...state,
    products: { ...state.products, loading: true },
  }),
  [getType(getProductsAction.success)]: (state, { payload }) => ({
    ...state,
    products: {
      ...state.products,
      data: payload,
    },
  }),
  [getType(getProductsAction.failure)]: (state, { payload }) => ({
    ...state,
    products: { ...state.products, loading: false, error: payload },
  }),

  // добавление товара в корзину
  [getType(addToCart)]: (state, { payload }) => {
    return {
      ...state,
      cart: {
        ...state.cart,
        data: [...state.cart.data, payload],
      },
      products: {
        ...state.products,
        data: state.products.data.map((el: TProduct) => ({
          ...el,
          available: el._id === payload._id ? el.available - 1 : el.available,
        })),
      },
    };
  },

  // удаление товара из корзины
  [getType(deleteFromCart)]: (state, { payload }) => {
    const idxCartEl = state.cart.data.findIndex(
      (el: TProduct) => el._id === payload
    );

    return {
      ...state,
      cart: {
        ...state.cart,
        data:
          idxCartEl >= 0
            ? [
                ...state.cart.data.slice(0, idxCartEl),
                ...state.cart.data.slice(idxCartEl + 1),
              ]
            : state.cart.data,
      },
      products: {
        ...state.products,
        data: state.products.data.map((item: TProduct) => ({
          ...item,
          available:
            state.cart.data.find((el: TProduct) => el._id === payload) &&
            item._id === payload
              ? item.available + 1
              : item.available,
        })),
      },
    };
  },
});
export default shopReducer;
