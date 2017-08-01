import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

export  default class ListInfo extends Component {
  render() {
    const { title, info, icon } = this.props;
    return(
      <View style={styles.infoRow}>
        <View style={styles.iconWrap}>
          <Icon size={20} style={styles.icon} name={icon}/>
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.title}>
            {title && title}
          </Text>
          <Text style={styles.info}>
            {info && info}
          </Text>
        </View>
      </View>
    );
  }
}