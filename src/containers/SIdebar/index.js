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
import ItemSideBar from '../../components/ItemSideBar/index'

export default  class SideBarContainer extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  }

  render() {
    return (
    <View style={styles.container}>
      <ItemSideBar />
    </View>
    );
  }
}