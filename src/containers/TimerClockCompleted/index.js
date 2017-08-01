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
import FooterItem from "../../components/footerItem/index";
import TimerComponent from "./../../components/Timer";
import SubTime from "../../components/SubTime/index";
import BtnAddTime from "../../components/BtnAddTime/index";
import TextInputItem from "../../components/TextInput/index";
import RowSwitch from "../../components/RowSwitch/index";
import ButtonsTimer from "../../components/ButtonsTimer/index";
import ModalInfo from "../../components/Modal/index";

export default class TimerClockCompleted extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: <HeaderPage
      navigation={navigation}
      title={"Timer"}
    />
  });
  state = {
    visibleModal: false
  }
  
  render() {
    const listButtons = [
      {
        title: 'Carolina Lakes Golf Club: Marketing Consulting',
        onPress: () => this.setState({
          visibleModal: true
        })
      },
      {
        title: 'Recurring Billing: Impresario Subscriptions: DiamondPeak'
      },
      {
        title: 'Seagate properties: P964131 New HP Controls 899 NG 4th Floor'
      },
    ];
    hideModal = () => {
      this.setState({
        visibleModal: false,
      });
    }
    return(
      <View style={styles.container}>
        <ModalInfo
          visibleModal={this.state.visibleModal}
          hideModal={hideModal.bind(this)}
          timerModal1={true}
        />
        <ScrollView>
          <View style={styles.content}>
            <TimerComponent
              title={"Clock In"}
              time={"9:17"}
              format={"AM"}
            />
            <View style={styles.SubTimeRow}>
              <SubTime
                text={'Clocked in at 0:01 AM'}
              />
            </View>
            <View style={styles.listButtonsRow}>
              {
                listButtons.map((item, index) =>
                  <BtnAddTime
                    key={index}
                    title={item.title}
                    onPress={item.onPress}
                  />
                )
              }
            </View>
            <View style={styles.inputRow}>
              <TextInputItem
                placeholder={'Add notes'}/>
            </View>
            <RowSwitch/>
          </View>
        </ScrollView>
        <View style={styles.wrapButtonsTimer}>
          <ButtonsTimer
            backgroundLeftGreen={true}
            backgroundRightGreen={true}
            buttonLeftText={'Start Break'}
            buttonRightText={'Clock Out'}
          />
        </View>
        <FooterItem/>
      </View>
    );
  }
}