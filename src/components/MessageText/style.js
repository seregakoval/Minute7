import { StyleSheet } from 'react-native';
import colors from './../../config/color.config';

export  default StyleSheet.create({
  containerText: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapText: {
    flex: 1,
  },
  wrapButton: {
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  btn: {
  
  },
  textBtn: {
    color: colors.colorBlue,
  },
  wrapIcon: {
    marginRight: 10,
  },
  text: {
    color: '#9B9AA0',
    fontSize: 14,
    lineHeight: 23,
  },
  icon: {
    color: '#949399'
  }
});