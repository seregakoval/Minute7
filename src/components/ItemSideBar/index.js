import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import styles from './style';

export default class ItemSideBar extends Component {
    render() {
        return (
            <View style={styles.container}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.textBtn}>Home</Text>
              </TouchableOpacity>
            </View>
        );
    } 
}