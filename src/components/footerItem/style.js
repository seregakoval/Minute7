import { StyleSheet, Platform } from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  FooterNav: {
    backgroundColor: colors.colorBlue,
    paddingTop: 3,
    paddingBottom: 3,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    justifyContent: 'center',
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  textNav: {
    color: colors.darkWhite,
    fontSize: 12
  },
  wrapIcon: {
    height: 25,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  iconNav: {
    color: colors.darkWhite,
    marginBottom: 5
  }
});