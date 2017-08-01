import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import HeaderPage from './../../components/HeaderPage/index';
import SettingsItem from './../../components/SettingsList';
import FooterItem from './../../components/footerItem/index';
import ModalInfo from './../../components/Modal/index';
import styles from './style';

export default class Settings extends Component {
  static navigationOptions =  ({ navigation, screenProps}) => ({
    header: <HeaderPage
      dropDown={true}
      navigation={navigation}
      title="Settings"/>,
  });
  state = {
    visibleModal: false
  }
  render() {
   
    const iconTime = require('../../assets/images/time-material.png');
    const footerList = [
      {
        name: 'Time',
        imgUrl: 'access-time',
        isActive: false,
        onPress: () => console.log("onpress item"),
      },
      {
        name: 'Timesheet',
        imgUrl: "assignment",
        isActive: false,
        onPress: () => console.log("onpress item2"),
      },
      {
        name: 'Expenses',
        imgUrl: "attach-money",
        isActive: false,
        onPress: () => console.log("onpress item3"),
      },
      {
        name: 'Settings',
        imgUrl: "assignment",
        isActive: false,
        onPress: () => console.log("onpress item"),
      },
    ];
    const itemList = [
      {
        name: "Refresh Now",
        urlIcon: "sync",
        text: "Download updated data for customers, services, etc."
      },
      {
        name: "Round Time to 1 min",
        urlIcon: "access-time",
        arrow: true,
        onPress: () => this.setState({
          visibleModal: true
        })
      },
      {
        name: "Help",
        urlIcon: "help-outline",
      },
      {
        name: "Logout",
        urlIcon: "keyboard-tab",
      },
    ];
    hideModal = () => {
      this.setState({
        visibleModal: false,
      });
    }
    return (
      <View style={styles.container}>
        <ModalInfo
          timeModal={true}
          visibleModal={this.state.visibleModal}
          hideModal={hideModal.bind(this)}
        />
        <View style={styles.content}>
          <View style={styles.settingContainer}>
            {
              itemList.map((item, index) =>
                <SettingsItem
                  key={index}
                  name={item.name}
                  text={item.text}
                  urlIcon={item.urlIcon}
                  arrow={item.arrow}
                  onPress={item.onPress}
                />
              )
            }
          </View>
        </View>
        <FooterItem/>
      </View>
    );
  }
}