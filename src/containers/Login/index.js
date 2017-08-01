import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import styles from './style';
import HeaderPage from './../../components/HeaderPage/index';
import Input from "../../components/Input/index";
import TouchableOpacityBtn from "../../components/TouchableOpacity/index";

const logo = require("../../assets/images/Logo.png");

export default class Login extends Component {
  static navigationOptions =  ({ navigation, screenProps}) => ({
    header: <HeaderPage
      navigation={navigation}
      title="Login"/>,
  });
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Input placeholder={"Login"} />
        <Input
          isActive={true}
          secureTextEntry={true}
          placeholder={"Password"} />
       <TouchableOpacityBtn
         textBtn="Login"
       />
        <Text style={styles.footerText}> Need help?</Text>
        <Text style={styles.phoneFooter}>(858) 736-9366</Text>
      </View>
    );
  }
}