import { combineReducers } from 'redux';
import UserDetails from "./reducer-userDetails";
import { default as products, getProduct } from './products'

const allReducers = combineReducers({
  UserDetails,
  products
})

export default allReducers;