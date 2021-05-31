import { all } from "redux-saga/effects";
import { watchShop } from "./shop/effects";

export default function* rootSaga() {
  yield all([watchShop()]);
}
