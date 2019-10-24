import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "sdk/actions";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button className="btn btn-primary" onClick={this.props.decrement}>-</button>
          <span className="btn btn-link">{this.props.count}</span>
          <button className="btn btn-info" onClick={this.props.increment}>+</button>
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
