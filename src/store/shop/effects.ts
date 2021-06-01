import { call, put, takeEvery } from "redux-saga/effects";
import { addOrderAction, getOrdersAction, getProductsAction } from "./actions";
import { Api } from "../../api";

function* productsSaga({ payload: { path, params } }: any): any {
  try {
    const response = yield call([Api, Api.get], path, params);
    yield put(getProductsAction.success(response));
  } catch (error) {
    yield put(getProductsAction.failure(error));
  }
}

function* ordersSaga({ payload: { path, data } }: any): any {
  try {
    const responseOrders = yield call([Api, Api.get], path, data);
    yield put(getOrdersAction.success(responseOrders));
  } catch (error) {
    yield put(getOrdersAction.failure(error));
  }
}

function* addOrderSaga({ payload: { path, data } }: any): any {
  try {
    const response = yield call([Api, Api.post], path, data);
    yield put(addOrderAction.success(response));
    console.log(`data`, data);
    for (const orderEl of data.products) {
      const requestData = {
        ...orderEl,
      };
      console.log(`requestData`, requestData);
      yield call([Api, Api.patch], "products", requestData);
    }
    console.log("дошел не упал");
  } catch (error) {
    yield put(addOrderAction.failure(error));
  }
}

export function* watchShop() {
  yield takeEvery(getProductsAction.request, productsSaga);
  yield takeEvery(addOrderAction.request, addOrderSaga);
  yield takeEvery(getOrdersAction.request, ordersSaga);
}
