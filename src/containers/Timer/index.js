import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from './style';
import FooterItem from './../../components/footerItem/index';
import TimerComponent from './../../components/Timer/index';
import HeaderPage from "../../components/HeaderPage/index";
import BtnAddTime from './../../components/BtnAddTime/index'
import TextInputItem from './../../components/TextInput/index';
import RowSwitch from './../../components/RowSwitch/index';
import TouchableOpacityBtn from "./../../components/TouchableOpacity/index"

export default class Timer extends  Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <HeaderPage
      navigation={navigation}
      title="Timer" />
  });
  render() {
    const listButtons = [
      {
        title: "Customer",
      },
      {
        title: "Service/item",
      },
      {
        title: "Class",
      }
    ];
    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <TimerComponent
              title={"Clock In"}
              time={"9:17"}
              format={"AM"}
            />
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
            <TextInputItem
             placeholder={'Add notes'}
            />
            <View style={styles.wrapRowSwitch}>
              <RowSwitch />
            </View>
            <View style={styles.wrapBtn}>
              <TouchableOpacityBtn
                textBtn={'Clock In'}
                fullWidth={true}
                background={true}
              />
            </View>
          </View>
        </ScrollView>
        <FooterItem/>
      </View>
    );
  }
}