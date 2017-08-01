import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './style'
import TouchableOpacityBtn from "../TouchableOpacity/index";

export default class MessageText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberLines: 2,
      textButton: 'Show more'
    }
  }
  _showAllText = () => {
    if (this.state.numberLines) {
      this.setState({
        numberLines: false,
        textButton: 'Hide'
      })
    } else {
      this.setState({
        numberLines: 2,
        textButton: 'Show more'
      })
    }
  }
  
  render() {
    return(
      <View>
        <View style={styles.containerText}>
          <View style={styles.wrapIcon}>
            <Icon
                style={styles.icon}
                size={20}
                name="message"/>
          </View>
          <View style={styles.wrapText}>
            <Text style={styles.text} numberOfLines={this.state.numberLines}>{this.props.text}</Text>
          </View>
        </View>
        <View style={styles.wrapButton}>
          <TouchableOpacity
            style={styles.btn}
            onPress={this._showAllText}>
            <Text style={styles.textBtn}>{this.state.textButton}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}