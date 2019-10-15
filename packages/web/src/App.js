import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "sdk/store";
import Counter from "./Counter";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    );
  }
}
