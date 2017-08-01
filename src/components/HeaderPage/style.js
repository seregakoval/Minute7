import { StyleSheet } from 'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
    paddingTop: 23,
    paddingHorizontal: 15,
    paddingBottom: 10,
    backgroundColor: colors.colorBlue
  },
  iconSideMenu: {
    color: '#fff'
  },
  headerTitle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  rightSection: {
    width: 70,
    alignItems: 'flex-end'
  },
  leftSection: {
    width: 70,
    alignItems: 'flex-start'
  },
  icon: {
    marginLeft: -10,
    color: '#fff',
  },
  wrapReset: {
    alignItems: "center",
    flexDirection: 'row',
  },
  resetText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 8,
  }
});