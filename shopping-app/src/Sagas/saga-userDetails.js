import "regenerator-runtime/runtime";
import { put, takeLatest, all } from "redux-saga/effects";
import {
    ADD_PRODUCT_TO_CART, CLOSE_CART_LIST_DRAWER, OPEN_CART_LIST_DRAWER, SET_PRODUCTS,
    SET_SELECTED_PRODUCT, SET_VIEW_PRODUCT_ID, USER_DETAILS
} from "../Constants/constant";
import axios from "axios";

function* fetchUserDetails(action) {
  let userData = {};
  let request = {
    name: action.userId,
    password: action.password
  };
  try {
    const fetchedData = yield axios.get(`/Fixtures/userDetails.json`);
    let responseData = fetchedData["data"];
    yield put({ type: "RECEIVED_USER_DETAILS", payload: responseData });
  } catch (error) {
    console.log(error);
  }
}

export default function* actionWatcherUserDetails() {
  yield takeLatest(USER_DETAILS, fetchUserDetails);
}
