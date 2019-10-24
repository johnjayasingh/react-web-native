import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "sdk/actions";
import { Text, View, Button } from 'react-native';

class Counter extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text>Counter</Text>
                <View>
                    <Button onPress={this.props.decrement} title="-"></Button>
                    <Text style={{ color: '#999' }}>{this.props.count}</Text>
                    <Button onPress={this.props.increment} title="+"></Button>
                </View>
            </View>
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
