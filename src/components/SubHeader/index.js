import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

export default class extends Component {
  render() {
    const { title, date } = this.props;
    return (
      <View style={styles.subHeader}>
        <View style={styles.iconWrap}>
          <Icon
            style={styles.icon}
            name="assignment"
            size={21}
          />
        </View>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.iconWrap}>
          <Icon
            style={styles.icon}
            name="assignment"
            size={21}
          />
        </View>
      </View>
    );
  }
}