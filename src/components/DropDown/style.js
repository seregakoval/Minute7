import { StyleSheet } from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  containerDropDown: {
  
  },
  button: {
  
  },
  textBtn: {
    fontSize: 14,
    color: '#fff',
  },
  wrapDropDown: {
    position: 'absolute',
    top: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 3,
    right: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  itemText: {
    color: colors.gray,
    marginBottom: 5,
  }
});