import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Colors,
  Fonts,
  scale,
  verticalScale,
  moderateScale
} from '../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  textInput: {
    marginTop: verticalScale(10)
  },
  alertText: {
    color: Colors.themeGreen,
    fontSize: Fonts.size.small,
    marginLeft: scale(5)
  },
  warningIcon: {
    height: verticalScale(12),
    width: scale(12),
    resizeMode: 'contain'
  },
  errorView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(2),
    width: scale(280)
  },
  redBorder: {
    borderColor: Colors.themeGreen
  },
  placeholderText: {
    fontSize: moderateScale(11)
  }
});

export default styles;
