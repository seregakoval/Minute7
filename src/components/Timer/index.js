import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from './style';


export default class TimerComponent extends  Component {
  render() {
    const { title, time, format, subTextTime } = this.props;
    return (
      <View>
          {title && <Text style={styles.title}>{title}</Text>}
          <View style={styles.wrapTimer}>
            <View style={styles.left}></View>
            <View style={styles.time}>
              <Text style={styles.timeText}>{time}</Text>
            </View>
            <View style={styles.format}>
              {format && <Text style={styles.formatText}>{format}</Text>}
            </View>
          </View>
          <View style={styles.formatTime}>
            {subTextTime && <View style={styles.column}>
              <Text style={styles.textFormatTime}>hrs</Text>
            </View>}
            {subTextTime && <View style={[styles.column, styles.mins]}>
              <Text style={styles.textFormatTime}>mins</Text>
            </View>}
          </View>
      </View>
    );
  }
}