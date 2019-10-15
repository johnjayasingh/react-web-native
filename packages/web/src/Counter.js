import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "sdk/actions";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.props.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.props.increment}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
