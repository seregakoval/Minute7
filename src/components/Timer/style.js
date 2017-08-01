import { StyleSheet, Platform } from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  title: {
    marginTop: 25,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    color: colors.gray,
  },
  wrapTimer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 80,
    color: '#ADACB0',
  },
  time: {
 
  },
  format: {
    marginTop: 35,
    width: 30,
  },
  left: {
    width: 25,
  },
  formatText: {
    color: colors.gray,
  },
  formatTime: {
   paddingHorizontal: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textFormatTime: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center'
  },
  column: {
    flex: 1,
    justifyContent: 'center',
  },
  mins: {
    marginLeft: 30,
  }
});