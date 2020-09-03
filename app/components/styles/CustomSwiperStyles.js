import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, verticalScale } from '../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    height: verticalScale(120),
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 4,
    marginLeft: 4
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
