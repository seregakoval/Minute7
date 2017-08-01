import { StyleSheet, Platform } from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  contentPage: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    flex:1,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scroll: {
    marginBottom: 20,
    flex:1
  },
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