import { createReducer, getType } from "typesafe-actions";
import { getCartAction } from "./actions";
import { TStateCart } from "./entities";

const initialState: TStateCart = {
  data: [],
  loading: false,
  error: null,
};
const cartReducer = createReducer<TStateCart>(initialState, {
  [getType(getCartAction.request)]: (state) => ({
    ...state,
    loading: true,
  }),
  [getType(getCartAction.success)]: (state, { payload }) => ({
    ...state,
    data: payload,
    loading: false,
  }),
  [getType(getCartAction.failure)]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }),
});
export default cartReducer;
