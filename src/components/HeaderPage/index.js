import React, { Component } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownComponent from "../DropDown/index";

export default class HeaderPage extends Component {
  render() {
    const { title, navigation,  resetIcon, dropDown, hideModal, sideMenu, showSide} = this.props;
    return (
      <View style={styles.header}>
       <View style={styles.leftSection}>
         {sideMenu &&
           <TouchableOpacity
            onPress={() => showSide()}>
             <Icon
               style={styles.iconSideMenu}
               size={25}
               name='menu'
             />
           </TouchableOpacity>
         }
         {navigation && <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
           <Icon
             name={'chevron-left'}
             size={30}
             style={styles.icon}
           />
         </TouchableOpacity>}
       </View>
        <Text style={styles.headerTitle}>
          {title}
        </Text>
        <View style={styles.rightSection}>
          {resetIcon &&
            <TouchableOpacity
              onPress={() => hideModal()}
              style={styles.wrapReset}>
              <Icon
                style={styles.icon}
                name='restore'
                size={23}  />
              <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>}
          {dropDown && <DropDownComponent/>}
        </View>
      </View>
    );
  }
}