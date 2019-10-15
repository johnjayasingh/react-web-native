import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "sdk/store";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <p>Para</p>
        <p>{JSON.stringify(this.props)}</p>
      </Provider>
    );
  }
}
