import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from './style';
import Switch from 'react-native-customisable-switch';

export default class RowSwitch extends  Component {
  render() {
    return(
      <View style={styles.switchRow}>
        <Text style={styles.titleSwitch}>
          Billable
        </Text>
        <Switch
          style={styles.switch}
          value={true}
          disabled={false}
          switchWidth={35}
          switchHeight={13}
          padding={0}
          buttonWidth={17}
          buttonHeight={17}
          activeBackgroundColor={'#A7E5AB'}
          inactiveButtonBackgroundColor={'#8E8E8E'}
          activeButtonBackgroundColor={'#4FCB57'}
          inactiveBackgroundColor={'#CDCDCD'}
          fontSize={16}
        />
      </View>
    );
  }
}