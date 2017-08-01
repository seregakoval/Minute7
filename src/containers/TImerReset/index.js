import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import styles from './style';
import HeaderPage from "../../components/HeaderPage/index";
import SubTime from "../../components/SubTime/index";
import TimerComponent from "../../components/Timer/index";
import BtnAddTime from "../../components/BtnAddTime/index";
import TextInputItem from "../../components/TextInput/index";
import ButtonsTimer from "../../components/ButtonsTimer/index";
import FooterItem from "../../components/footerItem/index";
import ModalInfo from "../../components/Modal/index";


export default class TimerReset extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false
    }
  }
  static navigationOptions = ({ navigation, screenProps, hideModal}) => ({
    header: null,
  });
  hideModal = () => {
    if (this.state.visibleModal) {
      this.setState({
        visibleModal: false
      });
    } else {
      this.setState({
        visibleModal: true
      });
    }
  };
  render() {
    const { navigation, hideModal } = this.props;
    const listButtons = [
      {
        title: "Carolina Lakes Golf Club: Marketing Consulting",
      },
      {
        title: "Recurring Billing: Impresario Subscriptions: DiamondPeak",
      },
      {
        title: "Seagate properties: P964131 New HP Controls 899 NG 4th Floor",
      }
    ];
    
    return(
      <View style={styles.container}>
        <HeaderPage
          navigation={navigation}
          title={"TimerReset"}
          resetIcon={true}
          modalReset={true}
          hideModal={this.hideModal}
        />
        <ModalInfo
          hideModal={this.hideModal}
          resetModal={true}
          visibleModal={this.state.visibleModal}
        />
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.wrapTopTime}>
              <SubTime
                text={'Tuesday, Apr 04, 2017'}
              />
            </View>
            <TimerComponent
              time={'00:15'}
              subTextTime={true}
            />
            <View style={styles.wrapSubTime}>
              <SubTime
                text={'Clocked in at 9:17 AM'}
              />
            </View>
            {
              listButtons.map((item, index) =>
                <BtnAddTime
                  key={index}
                  title={item.title}
                  text={item.text}
                />
              )
            }
            <TextInputItem
              placeholder={'Add notes'}
            />
          </View>
        </ScrollView>
        <View style={styles.wrapButtonsTimer}>
          <ButtonsTimer
            buttonLeftText={'Start Break'}
            buttonRightText={'Clock Out'}
            backgroundLeftGreen={true}
            backgroundRightGreen={true}
          />
        </View>
        <FooterItem
        
        />
      </View>
    );
  }
}