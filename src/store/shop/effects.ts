import { call, put, takeEvery } from "redux-saga/effects";
import { getProductsAction } from "./actions";
import { Api } from "../../api";

function* productsSaga({ payload: { path, params } }: any): any {
  try {
    const response = yield call([Api, Api.get], path, params);
    yield put(getProductsAction.success(response));
  } catch (error) {
    yield put(getProductsAction.failure(error));
  }
}

export function* watchShop() {
  yield takeEvery(getProductsAction.request, productsSaga);
}
