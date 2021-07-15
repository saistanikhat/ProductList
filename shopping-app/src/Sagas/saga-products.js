import "regenerator-runtime/runtime";
import { call, fork, put, take, takeLatest, all } from "redux-saga/effects";
import {selectProductToView, initShopProducts} from '../Actions/action-products';
import {Api} from '../Services/index';
import {
    ADD_PRODUCT_TO_CART, CLOSE_CART_LIST_DRAWER, OPEN_CART_LIST_DRAWER, SET_PRODUCTS,
    SET_SELECTED_PRODUCT, SET_VIEW_PRODUCT_ID
} from "../Constants/constant";
import axios from "axios";

export function* getAllProducts() {
    const products = yield call(Api.getProducts);
    yield put(initShopProducts(products));
}

export function* watchViewProductDetail() {
    while (true) {
        const {productId} = yield take(SET_VIEW_PRODUCT_ID);
        const selectedProduct = yield call(Api.getProducts, parseInt(productId));
        yield put(selectProductToView(selectedProduct));
    }
}

export default function* productsSaga() {
    yield fork(getAllProducts);
    yield fork(watchViewProductDetail);
}
