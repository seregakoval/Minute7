import { StyleSheet } from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pageContent: {
    paddingHorizontal: 15,
    flex: 1,
    paddingBottom: 15,
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
})