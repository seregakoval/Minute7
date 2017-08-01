import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BtnAddTime extends Component {
  render() {
    const { title, text } = this.props;
    
    return(
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.btnAddTime}>
        <View style={styles.leftBtn}>
          <View style={styles.btnTitle}>
            <Text style={styles.title}>{title && title}</Text>
            {text &&  <Text style={styles.requireText}>{text}</Text>}
          </View>
        </View>
        <View style={styles.wrapIcon}>
          <Icon name="keyboard-arrow-right" style={styles.iconBtn} size={23} />
        </View>
      </TouchableOpacity>
    );
  }
}