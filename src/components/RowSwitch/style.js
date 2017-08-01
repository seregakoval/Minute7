import { StyleSheet, Platform } from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  switch: {
    backgroundColor: 'red',
    width: 145,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D8D8DB',
    paddingVertical: 12,
  },
  titleSwitch: {
    color: colors.gray,
    fontSize: 15,
  },
});