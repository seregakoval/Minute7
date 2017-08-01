import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './style';

export default class TouchableOpacityBtn extends Component {
  render() {
    const { textBtn, fullWidth, background } = this.props;
    let buttonStyleWidth;
    let buttonStyleBackground;
    
    if (fullWidth) {
      buttonStyleWidth = styles.fullWidth;
    }
    if (background) {
      buttonStyleBackground = styles.green;
    }
    return(
      <View style={styles.containerBtn}>
          <TouchableOpacity
            style={ [styles.touchableBtn, buttonStyleWidth, buttonStyleBackground]}>
            <Text style={styles.BtnText}>
              {textBtn}
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}