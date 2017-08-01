import { StyleSheet, Platform } from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  textInput: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#DEDDE0',
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 3,
    fontSize: 14,
    color: colors.gray,
  },
});