import { StyleSheet } from 'react-native';
import colors from './../../config/color.config';

export default StyleSheet.create({
  container: {
  },
  name: {
    color: "#8F8E94",
    fontSize: 14,
  },
  iconBtn: {
    color: "#B5B5B5",
    marginRight: 15,
  },
  TouchableOpacity: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#B5B5B5',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  TouchableOpacityleft: {
    flexDirection: "row",
    alignItems: "center",
  },
  subText: {
    fontSize: 12,
    color: colors.gray,
  }
});