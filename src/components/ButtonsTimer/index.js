import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from './style';


export default class ButtonsTimer extends  Component {
  render() {
    const { buttonLeftText, buttonRightText, backgroundLeftGreen, backgroundRightGreen } = this.props;
    let backgroundGreen;
    let backgroundRed;
    if (backgroundLeftGreen) {
      backgroundGreen = [styles.backgroundGreen]
    }
    if (backgroundRightGreen) {
      backgroundRed = [styles.backgroundRed]
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.styleBtn, backgroundGreen]}
        >
          <Text style={styles.textBtn}>
            {buttonLeftText && buttonLeftText}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.styleBtn, backgroundRed]}>
          <Text style={styles.textBtn}>
            {buttonRightText && buttonRightText}
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}