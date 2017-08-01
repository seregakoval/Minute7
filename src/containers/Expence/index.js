import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './style';
import HeaderPages from './../../components/HeaderPage/index'
import SettingsList from '../../components/SettingsList/index'
import ModalInfo from "../../components/Modal/index";
import RowSwitch from "../../components/RowSwitch/index";
import FooterItem from "../../components/footerItem/index";

export default class Expence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoModal: false,
      visibleModal: false,
      settingName: '',
      settingName2: '',
      ArrayValueModal: [],
      listSettingsArray: [
        {
          name: 'John Smitch',
          onPress: (id, listValueModal) => {
            this.showModal(id, listValueModal)
          },
          id: 0
        },
        {
          name: 'Customer: job',
          onPress: (id) => {
            const listNumbers =
              [
                {
                  time: "1111111",
                  onPress: (item) => {
          
                  }
                },
                {
                  time: "22222222",
                  onPress: (item) => {
                  }
                },
              ]
            this.showModal(id,listNumbers)
          },
          id: 1,
        },
        {
          name: 'Account',
          onPress: (id, listValueModal) => {},
        },
        {
          name: 'Bill',
          onPress: (id, listValueModal) => {},
        }
      ],
      buttonId: 0
    }
  }
  hideModal = () => {
    if (this.state.visibleModal) {
      this.setState({
        visibleModal: false
      })
    } else {
      this.setState({
        visibleModal: true
      })
    }
  }
  showModal = (id, e,) => {
    console.log('idid',id)
    this.setState({
      visibleModal: true,
      ArrayValueModal: e,
      buttonId: id,
    })
    
  }
  _onItemPressHandler = (item, index) => {
    this.setState({
      settingName: item.time,
    });
    let tmp = [
      ...this.state.listSettingsArray
    ]
    tmp[this.state.buttonId].name = item.time;
    this.setState({
      listSettingsArray: tmp
    })
  }
  
  render() {
    const listValueModal = [
        {
          time: "Carolina Lakes",
          onPress: (item) => {
          }
        },
        {
          time: "Christopher1",
          onPress: (item) => {
          }
        },
        {
          time: "Joseph",
        },
        {
          time: "William",
        },
        {
          time: "Carolina Lakes",
        },
    ]
    return (
      <View style={styles.container}>
        <ModalInfo
          hideModal={this.hideModal}
          listValueModal={this.state.ArrayValueModal}
          expenceModal={true}
          visibleModal={this.state.visibleModal}
          onItemPress={this._onItemPressHandler}
        />
        <HeaderPages
          navigation={this.props.navigation}
          title={'Expence'}
        />
        <View style={styles.subHeaderExpence}>
          <Text style={[styles.subHeaderText, styles.first]}>Design/Marketing</Text>
          <Text style={styles.subHeaderText}>$3000</Text>
        </View>
        <View style={styles.content}>
          {
            this.state.listSettingsArray.map((item, index) =>
              <SettingsList
                key={index}
                name={item.name}
                onPress={() => {item.onPress(item.id,listValueModal)}}
              />
            )
          }
          <RowSwitch/>
        </View>
        <FooterItem/>
      </View>
    );
  }
}