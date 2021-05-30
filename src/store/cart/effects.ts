import { call, put, takeEvery } from "redux-saga/effects";
import { getCartAction } from "./actions";
import { Api } from "../../api";

function* cartSaga({ payload: { path, params } }: any): any {
  try {
    const response = yield call([Api, Api.get], path, params);
    console.log(`response`, response);
    yield put(getCartAction.success(response));
  } catch (error) {
    yield put(getCartAction.failure(error));
  }
}

export function* watchCart() {
  yield takeEvery(getCartAction.request, cartSaga);
}
