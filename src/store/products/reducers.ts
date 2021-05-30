import { createReducer, getType } from "typesafe-actions";
import { getProductsAction } from "./actions";
import { TStateProducts } from "./entities";

const initialState: TStateProducts = {
  data: [],
  loading: false,
  error: null,
};
const productsReducer = createReducer<TStateProducts>(initialState, {
  [getType(getProductsAction.request)]: (state) => ({
    ...state,
    loading: true,
  }),
  [getType(getProductsAction.success)]: (state, { payload }) => ({
    ...state,
    data: payload,
    loading: false,
  }),
  [getType(getProductsAction.failure)]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }),
});
export default productsReducer;
