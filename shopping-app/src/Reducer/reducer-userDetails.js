import Axios from "axios";
import {
    ADD_PRODUCT_TO_CART, CLOSE_CART_LIST_DRAWER, OPEN_CART_LIST_DRAWER, SET_PRODUCTS,
    SET_SELECTED_PRODUCT, SET_VIEW_PRODUCT_ID, USER_DETAILS, HANDLE_USERID, 
    HANDLE_PASSWORD, HANDLE_LOG_OUT, RECEIVED_USER_DETAILS
} from "../Constants/constant";

const initialState = {
  userData: [],
  userId: "",
  password: "",
  isLoading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        isLoading: true
      };
    case HANDLE_USERID:
      return {
        ...state,
        userId: action.payload
      };
    case HANDLE_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case HANDLE_LOG_OUT:
      sessionStorage.setItem("token", null);
      return {
        ...state,
        ...initialState
      };
    case RECEIVED_USER_DETAILS:
      sessionStorage.setItem("token", action.payload.token);
      Axios.defaults.headers.common["Authorization"] = action.payload.token;
      return {
        ...state,
        ...{ userData: action.payload },
        isLoading: false
      };
    default:
      return state;
  }
}
