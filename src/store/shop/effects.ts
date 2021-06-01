import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
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
    const transformToUniqueItem = data.products.reduce((acc, el) => {
      return {
        ...acc,
        [el.id]: {
          available:
            Math.min(acc[el.id]?.available || el.available, el.available) - 1,
        },
      };
    }, {});

    for (const orderEl in transformToUniqueItem) {
      const requestData = {
        ...transformToUniqueItem[orderEl],
      };
      const updateProductsRes = yield call(
        [Api, Api.patch],
        `products/${orderEl}`,
        requestData
      );
      yield put(addOrderAction.success(updateProductsRes));
    }
  } catch (error) {
    yield put(addOrderAction.failure(error));
  }
}

export function* watchShop() {
  yield takeEvery(getProductsAction.request, productsSaga);
  yield takeEvery(addOrderAction.request, addOrderSaga);
  yield takeEvery(getOrdersAction.request, ordersSaga);
}
