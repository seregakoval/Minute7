import { StyleSheet } from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    padding: 15,
    flex: 1,
  },
  subHeaderExpence: {
    paddingVertical: 15,
    backgroundColor: '#ECECEC',
  },
  subHeaderText: {
    textAlign: 'center',
    color: colors.colorBlue,
    fontSize: 16,
  },
  first: {
    marginBottom: 5,
  }
});