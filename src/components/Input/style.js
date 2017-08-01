import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: '#C8C7CC',
    height: 36,
    width: width - 80,
    padding: 10,
    color: "#605D5D",
    fontSize: 14,
    borderRadius: 3,
    marginBottom: 15
  },
  isFocus: {
   borderColor: "#608EFD",
  }
});