import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class ListItem extends Component {
  render() {
    const { title, date, subTitle, time, isActive } = this.props;
    console.log(this.props.title,this.props.date);
    return (
      <View style={styles.container}>
        <View style={isActive ? [styles.item, styles.itemActive] : styles.item}>
          <View style={this.props.isActive ? [ styles.date, styles.dateActive] : styles.date}>
            <Text style={this.props.isActive ? [styles.dateText, styles.isActive] : styles.dateText}>{date && date}</Text>
          </View>
          <View style={styles.wrapTitleTime}>
            <View style={styles.titleWrap}>
              <Text style={styles.title}>{title}</Text>
              {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
            </View>
            <View style={styles.wrapTime}>
              {title ? <Text style={styles.time}>{time}</Text> :
                <TouchableOpacity>
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    style={styles.iconPlus}
                  />
                </TouchableOpacity>}
            </View>
          </View>
        </View>
      </View>
    );
  }
}