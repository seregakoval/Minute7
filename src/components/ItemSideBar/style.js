import { StyleSheet } from  'react-native';
import colors from  './../../config/color.config';

export default StyleSheet.create({
 container: {
  padding: 15,
 },
  button: {
  padding: 15,
  borderRadius: 3,
  borderBottomWidth: 1,
  borderColor: colors.colorBlue,
  marginBottom: 5,
  
 },
 textBtn: {
   fontWeight: "bold",
   color: colors.colorBlue
 }
});
