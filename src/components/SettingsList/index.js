import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class SettingsItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.TouchableOpacity}
          onPress={this.props.onPress}
        >
          <View style={styles.TouchableOpacityleft}>
            {this.props.urlIcon && <Icon name={this.props.urlIcon} style={styles.iconBtn} size={22} />}
            <View>
              <Text style={styles.name}>{this.props.name}</Text>
              {this.props.text && <Text style={styles.subText}>{this.props.text}</Text>}
            </View>
          </View>
          {this.props.arrow && <Icon name='keyboard-arrow-down' style={styles.iconBtn} size={25} />}
        </TouchableOpacity>
      </View>
    );
  }
}