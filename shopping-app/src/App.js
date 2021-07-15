import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "./Actions/action-userDetails";
import { Router, Route } from 'react-router-dom';
import ProductList from './Components/ProductList';
import data from './data/productList.json';

class App extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = () => {
    this.props.getUserDetails(
      this.props.userDetails.userId,
      this.props.userDetails.password
    );
    this.props.history.push('/products');
  };
  handleUserId = e => {
    this.props.handleUserId(e.target.value);
  };
  handlePassWord = e => {
    this.props.handlePassword(e.target.value);
  };
  handleLogout = () => {
    this.props.handleLogout();
  };

  render() {

    return (
      <div className="App" ref="app">
        <div className="header">
          <div className="log-out" onClick={() => this.handleLogout()}>
            Log Out
          </div>
        </div>
        {sessionStorage.getItem("token") !== "null" &&
        sessionStorage.getItem("token") !== null ? (
          <div><ProductList  /></div>
        ) : (
          <div className="search-View">
            <div>
              <input
                type="text"
                ref="userId"
                className="text-view"
                onChange={e => this.handleUserId(e)}
              />
            </div>
            <div>
              <input
                type="text"
                ref="password"
                className="text-view"
                onChange={e => this.handlePassWord(e)}
              />
            </div>
            <button
              className="submit-button"
              onClick={() => this.handleSubmit()}
            >
              Submit
            </button>
          </div>
        )}
        <div />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetails: state.UserDetails
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...Actions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
