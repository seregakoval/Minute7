import { StyleSheet, Platform } from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1,
    ...Platform.select({
      ios: {
        marginTop: 0
      },
      android: {
        marginTop: 0
      }
    }),
  },
  content: {
    flex: 1
  },
  footerNav: {
    backgroundColor: colors.colorBlue,
    paddingTop: 3,
    paddingBottom: 3,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  settingContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 25
  }
});