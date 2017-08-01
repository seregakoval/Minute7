import { StyleSheet, Platform, Dimensions } from 'react-native';
import colors from  './../../config/color.config';


const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: -10,
  },
  styleBtn: {
    marginHorizontal: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flex: 1,
  },
  textBtn: {
    fontSize: 16,
    color: '#fff',
  },
  backgroundGreen: {
    backgroundColor: '#4FCB57'
  },
  backgroundRed: {
    backgroundColor: '#FB6565'
  },
});