import { takeLatest, put, call } from "redux-saga/effects";
import {
    SET_PRODUCTS,
    SET_SELECTED_PRODUCT, SET_VIEW_PRODUCT_ID, USER_DETAILS, HANDLE_USERID, 
    HANDLE_PASSWORD, HANDLE_LOG_OUT
} from "../Constants/constant";

export const getUserDetails = (userId, password) => {
  debugger
  return {
    type: USER_DETAILS,
    userId,
    password
  };
};
export const handleUserId = enteredString => {
  return {
    type: HANDLE_USERID,
    payload: enteredString
  };
};
export const handlePassword = enteredString => {
  return {
    type: HANDLE_PASSWORD,
    payload: enteredString
  };
};
export const handleLogout = () => {
  return {
    type: HANDLE_LOG_OUT
  };
};
