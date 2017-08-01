import { StyleSheet } from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  subHeader: {
    backgroundColor: colors.colorBlue,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopWidth: 1,
    borderColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
  },
  titleWrap: {
    marginRight: "auto",
    marginLeft: "auto"
  },
  iconWrap: {
    width: 25,
  },
  icon: {
    color: "#fff"
  }
});