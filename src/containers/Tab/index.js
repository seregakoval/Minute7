import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import HeaderPage from "../../components/HeaderPage/index";
import ListPages from "../ListPages/ListPages";
import { TabNavigator } from 'react-navigation';
import Timesheets from "../Timesheets/index";
import FooterItem from "../../components/footerItem/index";
import TabComponent from "../../components/TabComponent/index";
import Settings from "../Settings/index";


const TabPages = TabNavigator(
  {
    Home: {
      screen : TabComponent,
      initialRouteName: 'chlen'
    },
    Timesheets: {
      screen : Timesheets,
    },
  },
  {
    tabBarComponent: (props) => <FooterItem
      navigation={props} />
  }
);

export default class TabPage extends Component {
  render() {
    const { navigation } = this.props;
    console.log('TabPages', navigation)
    return (
      <View style={{flex: 1,}}>
        <TabPages/>
      </View>
    );
  }
}