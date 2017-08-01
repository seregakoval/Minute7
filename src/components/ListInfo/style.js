import { StyleSheet, Platform , Dimensions} from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D8D8DB',
    paddingTop: 13,
    paddingBottom: 13,
  },
  title: {
    fontSize: 14,
    color: colors.gray,
  },
  info: {
    color: colors.colorBlue,
    
  },
  itemInfo: {
    flex:1,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  icon: {
    color: colors.gray,
  },
});