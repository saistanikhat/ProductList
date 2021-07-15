/* eslint-disable no-constant-condition */

import { take, put, takeLatest, call, fork, select, takeEvery, all } from 'redux-saga/effects';
import actionWatcherUserDetails from "./saga-userDetails";
import * as actions from '../Actions'
// import { getCart } from '../Reducers'
import { api } from '../Services'

export function* getAllProducts() {
  const products = yield call(api.getProducts)
  yield put(actions.receiveProducts(products))
}

export function* watchGetProducts() {
  /*
    takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
    i.e. concurrent GET_ALL_PRODUCTS actions are allowed
  */
  yield takeEvery(actions.GET_ALL_PRODUCTS, getAllProducts)
}

export default function* root() {
  yield all([fork(getAllProducts), fork(watchGetProducts), fork(actionWatcherUserDetails)])
}
