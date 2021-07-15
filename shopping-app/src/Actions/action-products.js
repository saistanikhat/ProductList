import {
    SET_PRODUCTS,
    SET_SELECTED_PRODUCT, SET_VIEW_PRODUCT_ID, USER_DETAILS, HANDLE_USERID, 
    HANDLE_PASSWORD, HANDLE_LOG_OUT
} from "../Constants/constant";

export const initShopProducts = (products) => {
    return {type: SET_PRODUCTS, products}
};

export const selectProductToView = (selectedProduct) => {
    return {type: SET_SELECTED_PRODUCT, selectedProduct}
};

export const selectProductIdToView = (productId) => {
    return {type: SET_VIEW_PRODUCT_ID, productId};
};
