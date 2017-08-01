import { StyleSheet, Dimensions } from 'react-native';
import colors from './../../config/color.config';
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
export default StyleSheet.create({
  containerModal: {
    marginTop: 25,
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapperModal: {
    backgroundColor: "red"
  },
  wrapModal: {
    backgroundColor: "#fff",
    borderRadius: 3,
    width: width - 70,
    minHeight: height - 450,
    maxHeight: height - 400,
    padding: 15,
    paddingLeft: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 5,
    marginTop: 5
  },
  textBtnReset: {
    color: '#FB6565',
    textAlign: "center",
    fontSize: 16,
  },
  closeBtn: {
    borderRadius: 3,
    marginTop: 3,
    padding: 12,
    backgroundColor: "#ECECEC",
    width: width - 100,
  },
  ButtonsRow: {
    flexDirection: 'row',
    width: width - 70,
  },
  btnReset: {
    borderRadius: 3,
    marginTop: 3,
    padding: 10,
    backgroundColor: "#ECECEC",
    flex: 1,
  },
  leftBtnReset: {
    marginLeft: 5,
  },
  textBtn: {
    textAlign: "center",
    fontSize: 16,
    color: colors.colorBlue,
  },
  expenceWrapModal: {
    backgroundColor: "#fff",
    borderRadius: 3,
    width: width - 100,
    minHeight: height - 450,
    maxHeight: height - 400,
    padding: 15,
    paddingLeft: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textButtonModal: {
  
  }
});