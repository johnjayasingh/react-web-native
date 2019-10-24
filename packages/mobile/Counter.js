import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "sdk/actions";
import { Text, View, Button, StyleSheet } from 'react-native';

class Counter extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={styles.bigFont}>Counter</Text>
                <View>
                    <Button style={styles.bigFont} onPress={this.props.decrement} title="-"></Button>
                    <Text style={styles.bigFont}>{this.props.count}</Text>
                    <Button style={styles.bigFont} onPress={this.props.increment} title="+"></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigFont: { color: '#999', textAlign: "center", fontSize: 40 }
})

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
