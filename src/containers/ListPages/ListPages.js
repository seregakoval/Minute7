import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import HeaderPage from "../../components/HeaderPage/index";
import Settings from '../Settings/index';
import styles from './style';
import FooterItem from "../../components/footerItem/index";

export default class ListPages extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const {navigation,  screenProps} = this.props;
    console.log('List page this screenProps2', navigation);
    return(
      <View style={styles.container}>
        <HeaderPage
          sideMenu={true}
          showSide={() => this.props.screenProps.navigate('DrawerOpen')}
          title={'List Pages'}
        />
        {this.props.tab}
        <View style={styles.homeContent}>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => {navigation.navigate("Timesheets"),console.log('1111111')}}>
            <Text>
              TimeSheet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigation.navigate("Settings")}>
            <Text>
              Settings
            </Text>
          </TouchableOpacity>
  
  
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigation.navigate("AddTimeEntry")}>
            <Text>
              AddTimeEntry
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigation.navigate("Timer")}>
            <Text>
              Timer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigation.navigate("TimerClockCompleted")}>
            <Text>
              TimerClockCompleted
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigation.navigate("TimerReset")}>
            <Text>
              TimerReset
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigation.navigate("TimerClockCompleted")}>
            <Text>
              TimerClockCompleted
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigation.navigate("Login")}>
            <Text>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigation.navigate("Expence")}>
            <Text>
              Expence
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigation.navigate("Tab")}>
            <Text>
              Tab
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigation.navigate("ExpenceDetails")}>
            <Text>
              ExpenceDetails
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}