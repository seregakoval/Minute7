import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';

import Timesheets from './../../containers/Timesheets/index';
import ListPages from '../../containers/ListPages/ListPages';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from './../../containers/Settings/index';
import Timer from "../Timer/index";
import TimerClockCompleted from "../TimerClockCompleted/index";
import TimerReset from "../TImerReset/index";
import AddTimeEntry from "../AddTimeEntry/index";
import Expence from './../Expence/index'
import ExpenceDetails from './../ExpenceDetails/index';
import styles from './style';
import Login from "../Login/index";
import FooterItem from "../../components/footerItem/index";
import TabPage from "../Tab/index";

const App = StackNavigator({
  Home: {
    screen: ListPages,
  },
  Timesheets: {
    screen: Timesheets,
  },
  Settings: {
    screen: Settings,
  },
  AddTimeEntry: {
    screen: AddTimeEntry,
  },
  Timer: {
    screen: Timer,
  },
  TimerClockCompleted: {
    screen: TimerClockCompleted,
  },
  TimerReset: {
    screen: TimerReset,
  },
  TimerClockCompleted: {
    screen: TimerClockCompleted,
  },
  Login: {
    screen: Login,
  },
  Expence: {
    screen: Expence,
    navigationOptions: {
      header: null
    }
  },
  Tab: {
    screen: TabPage,
    navigationOptions: {
      header: null
    }
  },
  ExpenceDetails: {
    screen: ExpenceDetails,
    navigationOptions: {
      header: null,
    }
  }
});
export default class Home extends Component {
  render() {
    return (
      <View style={styles.homeContent}>
        <App
          screenProps={this.props.navigation}
        />
        {/*<TabPages*/}
          {/*screenProps={this.props.navigation}*/}
        {/*/>*/}
      
      </View>
    );
  }
}

