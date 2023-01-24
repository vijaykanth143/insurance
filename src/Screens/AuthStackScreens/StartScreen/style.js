import {StyleSheet} from 'react-native';
import Colors from '../../../Styles/Colors';
import Fonts from '../../../Styles/Fonts';

export const Styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.black,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  textStyle: {
    color: Colors.white,
    fontSize: Fonts.fontSize.fontMedium,
    fontFamily: Fonts.fontStyle.RalewayMedium,
  },
});
