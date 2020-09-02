import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, verticalScale } from '../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    height: verticalScale(120),
    margin: 3,
    borderRadius: 3,
    overflow: 'hidden'
  },
  sliderContainer: {
    color: Colors.themeGreen
  },
  slider: {
    height: verticalScale(120),
    width: '100%'
  },
  image: {
    height: '100%',
    width: '100%'
  }
});

export default styles;
