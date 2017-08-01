import { StyleSheet, Platform , Dimensions} from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  btnAddTime: {
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: "row",
    borderBottomWidth:1,
    borderColor: "#E1E1E3",
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnTitle: {
    alignItems: 'center',
    flexDirection: "row",
  },
  leftBtn: {
    flex: 1,
  },
  iconBtn: {
    color: '#B5B5B5',
  },
  title: {
    fontSize: 14,
    color: colors.gray,
  },
  requireText: {
    marginLeft: 15,
    fontSize: 12,
    color: '#AEABAB',
  }
});