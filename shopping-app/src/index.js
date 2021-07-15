import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import ProductList from "./Components/ProductList";
import ProductItem from "./Components/ProductItem";
import { Provider } from "react-redux";
import Store from "./Store";
import history from './history';
import { Router, Route, Switch } from 'react-router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={Store}>
    <Router history={history}>
       <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/products" component={ProductList} />
      <Route exact path="/products/productDetail" component={ProductItem} />
       </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
