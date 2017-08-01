import { StyleSheet } from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
  },
  item: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    borderRadius: 5,
    backgroundColor: "#ECECEC",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapTitleTime: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    flex: 1,
  },
  date: {
    width: 45,
    borderWidth: 1,
    borderColor: "#A5A5A5",
    borderRadius: 5,
    padding: 5,
    marginRight: 20,
  },
  isActive: {
    color: colors.colorBlue,
  },
  dateText: {
    fontSize: 12,
    color: colors.gray,
    textAlign: "center",
  },
  titleWrap: {
    flex: 1,
    paddingRight: 20,
  },
  dateActive: {
    borderColor: colors.colorBlue,
  },
  itemActive: {
    borderLeftWidth: 4,
    borderColor: colors.colorBlue,
  },
  title: {
    fontSize: 16,
    color: colors.gray,
  },
  subTitle: {
    fontSize: 12,
    color: colors.gray,
  },
  dateTitle: {
  
  },
  time: {
    color: colors.gray,
  },
  iconPlus: {
    color: "#B7B7B7",
  }
});