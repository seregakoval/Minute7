import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from './style';

export default class SubTime extends Component {
  render() {
    const { text } = this.props;
    return(
      <View style={styles.container}>
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    );
  }
}