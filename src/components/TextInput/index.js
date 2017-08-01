import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from './style';


export default class TextInputItem extends  Component {
  render() {
    return (
      <View>
        <TextInput
          placeholder={'Add notes'}
          style={styles.textInput}
        />
      </View>
    );
  }
}