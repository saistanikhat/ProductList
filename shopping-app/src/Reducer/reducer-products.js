import {products} from '../data/productList';
import {
    ADD_PRODUCT_TO_CART, CLOSE_CART_LIST_DRAWER, OPEN_CART_LIST_DRAWER, SET_PRODUCTS,
    SET_SELECTED_PRODUCT, SET_VIEW_PRODUCT_ID, USER_DETAILS, HANDLE_USERID, 
    HANDLE_PASSWORD, HANDLE_LOG_OUT, REMOVE_PRODUCT_FROM_CART
} from "../Constants/constant";

const defaultState = {
    products: products
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                products: [...state.products.map((product) => {
                    product.animated = false;
                    return product;
                }), {...action.product, animated: true}]
            };
        case REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                products: [...state.products.filter(product => product.id !== action.product.id)]
            };
        case OPEN_CART_LIST_DRAWER:
            return {
                ...state,
                cartListDrawerOpened: true
            };
        case CLOSE_CART_LIST_DRAWER:
            return {
                ...state,
                cartListDrawerOpened: false
            };
        default:
            return state
    }
}