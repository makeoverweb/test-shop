import { all } from "redux-saga/effects";
import { watchCart } from "./cart/effects";
import { watchProducts } from "./products/effects";

export default function* rootSaga() {
  yield all([watchProducts(), watchCart()]);
}
