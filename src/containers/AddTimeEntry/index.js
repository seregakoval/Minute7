import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from './style';
import HeaderPage from "../../components/HeaderPage/index";
import BtnAddTime from "../../components/BtnAddTime/index";
import ListInfo from './../../components/ListInfo/index';
import FooterItem from './../../components/footerItem/index';
import Switch from 'react-native-customisable-switch';
import TouchableOpacityBtn from './../../components/TouchableOpacity/index'
import RowSwitch from './../../components/RowSwitch/index';

export default class AddTimeEntry extends Component {
  static navigationOptions =  ({ navigation, screenProps}) => ({
    header: <HeaderPage
      navigation={navigation}
      title="AddTimeEntry"/>,
  });
  render() {
    const listButtons = [
      {
        title: "Customer",
        text: "required"
      },
      {
        title: "Service/item",
        text: "required"
      },
      {
        title: "Class",
        text: "required"
      }
    ];
    const listSettings = [
      {
        title: "Date",
        info: "3/28/17",
        icon: 'date-range',
      },
      {
        title: "Hours worked",
        info: "11:18",
        icon: "av-timer"
      },
      {
        title: "Clock In",
        info: "0:00 AM",
        icon: "alarm",
      },
      {
        title: "Break Time",
        info: "0:22",
        icon: 'check',
      },
      {
        title: "Clock Out",
        info: "11:40 AM",
        icon: "alarm-on",
      }
    ];
    return(
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
        <View style={styles.contentPage}>
          <View style={styles.listButtons}>
            {
              listButtons.map((item, index) =>
                <BtnAddTime
                  key={index}
                  title={item.title}
                  text={item.text}
                />
              )
            }
          </View>
          <View>
            <TextInput
              placeholder={'Add notes'}
              style={styles.textInput}
            />
            <View style={styles.wrapListSettings}>
              {
                listSettings.map((item, index) =>
                  <ListInfo
                    key={index}
                    title={item.title}
                    info={item.info}
                    icon={item.icon}
                  />
                )
              }
            </View>
            <RowSwitch />
          </View>
        </View>
          <TouchableOpacityBtn
            textBtn={"Save"}
            fullWidth={true}
          />
        </ScrollView>
        <FooterItem />
      </View>
    );
  }
}