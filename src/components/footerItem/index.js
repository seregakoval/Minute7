import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from './../../containers/Settings/index'
import colors from  './../../config/color.config';
import TouchableOpacityBtn from "../TouchableOpacity/index";
export default class FooterItem extends Component {
  
  _navigateTo = () => {
    console.log("this.props ====== ", this.props)
    this.props.navigation && this.props.navigation.jumpToIndex('Timesheets');
  }
  
  render() {
    const { navigation } = this.props;
    console.log('FOOTER', navigation)
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
        onPress: () => this.props.navigation.navigate("Timesheets"),
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
    return (
      <View style={styles.FooterNav}>
        {
          footerList.map((item, index) =>
            <TouchableOpacity
              key={index}
              style={styles.navItem}
              onPress={() => this.props.onPress(item)}
            >
              <View style={styles.wrapIcon}>
                <Icon
                  name={item.imgUrl}
                  style={styles.iconNav}
                  size={22}
                />
              </View>
              <Text style={styles.textNav}>{item.name}</Text>
            </TouchableOpacity>
          )
        }
      </View>
    );
  }
};