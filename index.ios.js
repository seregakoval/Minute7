/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import {
  DrawerNavigator,
} from 'react-navigation';

import Settings from './src/containers/Settings/index';
import FooterItem from './src/components/footerItem/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TimerReset from './src/containers/TImerReset/index';
import Login from './src/containers/Login/index';
import AddTimeEntry from './src/containers/AddTimeEntry/index';
import SideBarContainer from './src/containers/SIdebar/index'
import Timesheets from './src/containers/Timesheets/index';
import Timer from './src/containers/Timer/index';
import Home from './src/containers/Home/index';
import TimerClockCompleted from './src/containers/TimerClockCompleted/index';

const Drawernav = DrawerNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    drawerWidth: 250,
    contentComponent: (props) => <SideBarContainer  />,
  }
);


export default class Minut7Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Drawernav/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 25,
  },
});

AppRegistry.registerComponent('Minut7Test', () => Minut7Test);
