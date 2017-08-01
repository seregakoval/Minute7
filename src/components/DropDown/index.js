import React, { Component } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation'


export default class DropDownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownVisible: false,
    }
  }
  showDropDown = () => {
    if (this.state.dropDownVisible) {
      this.setState({
        dropDownVisible: false,
      });
    } else {
      this.setState({
        dropDownVisible: true,
      });
    }
  }
  render() {
    const listDropDownItem = [
      {
        text: "Item button"
      },
      {
        text: "Item"
      },
      {
        text: "Item button"
      },
      {
        text: "Item"
      },
      {
        text: "Item button"
      },
    ];

    return(
      <View style={styles.containerDropDown}>
        <TouchableOpacity
          onPress={this.showDropDown}
          style={styles.button}>
          <Text style={styles.textBtn}>On</Text>
        </TouchableOpacity>
        {this.state.dropDownVisible && <View
          style={styles.wrapDropDown}>
          {
            listDropDownItem.map((item, index) =>
              <TouchableOpacity
                key={index}>
                <Text style={styles.itemText}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            )
          }
        </View>}
      </View>
    );
  }
}