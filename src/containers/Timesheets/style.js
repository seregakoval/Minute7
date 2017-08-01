import { StyleSheet, Dimensions  } from 'react-native';
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
  },
  footerRow: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: width,
  },
  addBtn: {

  },
  footerRow: {
    position: "absolute",
    bottom: 70,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    marginBottom: 70,
  }
});