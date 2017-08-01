import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  containerBtn: {
    justifyContent:'center',
    alignItems: 'center',
  },
  touchableBtn: {
    backgroundColor: "#608EFD",
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "row",
    width: width - 220,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: 3,
    height: 40
  },
  fullWidth: {
    width: width - 20,
  },
  BtnText: {
    color: "#fff",
    textAlign: 'center'
  },
  green: {
    backgroundColor: '#4FCB57',
  }
});