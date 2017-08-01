import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';

import HeaderPage from './../../components/HeaderPage/index';
import SubHeader from './../../components/SubHeader/index';
import TouchableOpacityBtn from './../../components/TouchableOpacity/index';
import ListItem from './../../components/ListItem/index';
import FooterItem from './../../components/footerItem/index';
import styles from './style';

export default class Timesheets extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const listItem = [
      {
        title: "Multiple entries",
        subTitle: "View all entries",
        date: "MON 12/01",
        time: "5:35",
        isActive: true,
      },
      {
        title: "MarkM",
        subTitle: "09:00an - 5:00pm",
        date: "TUE 12/08",
        time: "08:00",
      },
      {
        date: "TUE 12/08",
      },
      {
        date: "TUE 12/08",
      },
      {
        date: "TUE 12/08",
      },
      {
        date: "TUE 12/08",
      },
      {
        date: "TUE 12/08",
      },
    ];
    return(
      <View style={styles.container}>
        <View style={styles.content}>
          <HeaderPage
            navigation={this.props.navigation}
            title="Timesheet"/>
          <SubHeader
            title={"Week"}
            date={"Feb, 10-17, 1017"}
          />
          <ScrollView>
           <View style={styles.items}>
             {
               listItem.map((item, index) =>
                 <ListItem
                   key={index}
                   title={item.title}
                   date={item.date}
                   subTitle={item.subTitle}
                   time={item.time}
                   isActive={item.isActive}
                 />
               )
             }
           </View>
          </ScrollView>
        </View>
        <View style={styles.footerRow}>
            <TouchableOpacityBtn
              fullWidth={true}
              textBtn={"Add Time Entry"}
            />
        </View>
       
        <FooterItem />
      </View>
    );
  }
}