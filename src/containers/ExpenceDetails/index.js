import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
 
import styles from './style'

import HeaderPages from './../../components/HeaderPage/index';
import FooterItem from './../../components/footerItem/index'
import ListInfo from './../../components/ListInfo/index';
import SettingsList from './../../components/SettingsList/index';
import RowSwitch from "../../components/RowSwitch/index";
import MessageText from "../../components/MessageText/index";

export default class ExpenceDelails extends Component {
  render() {
    const listSettings = [
      {
        title: 'Date',
        info: '03/04/2017',
        icon: 'date-range'
      },
    ];
    const listSettingsModal = [
      {
        name: 'John Smith',
      },
      {
        name: 'Customer: job',
      },
      {
        name: 'John Smith',
      },
      {
        name: 'Account',
      },
      {
        name: 'Bill',
      },
    ];
    const messageText = ['Lorem ipsum dolor sit amet, consect tur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consecttur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consect tur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consect tur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consecttur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consect tur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consect.'];
    return (
      <View style={styles.container}>
        <HeaderPages
          navigation={this.props.navigation}
          title='Expence Details' />
        <View style={styles.subHeaderExpence}>
          <Text style={[styles.subHeaderText, styles.first]}>Design/Marketing</Text>
          <Text style={styles.subHeaderText}>$3000</Text>
        </View>
        <ScrollView>
          <View style={styles.pageContent}>
            {listSettings.map((item, index) =>
              <ListInfo
                key={index}
                title={item.title}
                info={item.info}
                icon={item.icon}
              />
            )}
            {listSettingsModal.map((item, index) =>
              <SettingsList
                key={index}
                name={item.name}
              />
            )}
            <RowSwitch/>
            <MessageText
              text={messageText}
            />
          </View>
        </ScrollView>
        <FooterItem />
      </View>
    );
  }
}