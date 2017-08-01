import React, { Component } from 'react';

import {
  Text,
  Image,
  View,
  TextInput,
} from 'react-native';

import styles from './style';

export default class Input extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
    }
  }
  render () {
    const { placeholder, secureTextEntry, } = this.props;
    return (
      <View>
        <TextInput
          secureTextEntry={secureTextEntry ? secureTextEntry : false}
          style={this.state.isFocus ? [styles.textInput, styles.isFocus]: styles.textInput}
          onFocus={() => this.setState({isFocus: true})}
          placeholder={placeholder}
          onBlur={() => {this.setState({isFocus: false})}}
          returnKeyType={'done'}
          blurOnSubmit={true}
          onSubmitEditing={() =>this.setState({isFocus: false})}
          />
      </View>
    );
  }
}