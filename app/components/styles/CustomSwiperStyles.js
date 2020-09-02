import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, verticalScale } from '../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  sliderContainer: {
    height: verticalScale(80),
    width: '100%',
    color: Colors.themeGreen
  },
  slide1: {
    height: verticalScale(80),
    width: '100%',
    backgroundColor: Colors.white
  },
  text1: {
    color: Colors.themeGreen
  }
});

export default styles;
