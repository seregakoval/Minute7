import { StyleSheet, Platform } from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    paddingHorizontal: 15,
    flex: 1,
    marginBottom: 30,
  },
  SubTimeRow: {
    marginBottom: 20,
  },
  listButtonsRow : {
    marginBottom: 5,
  },
  inputRow: {
    marginBottom: 5,
  },
  wrapButtonsTimer: {
    backgroundColor: '#fff',
    paddingTop: 10,
    marginBottom: 15,
  },
});