import { StyleSheet } from 'react-native';
import { Colors, scale, verticalScale, Fonts } from '../../theme';

const styles = StyleSheet.create({
  buttonTouchable: {
    height: verticalScale(38),
    width: scale(150),
    backgroundColor: Colors.themeLightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  disabledButton: {
    backgroundColor: Colors.rosyBrown
  },
  buttonText: {
    color: Colors.white,
    fontSize: Fonts.size.label,
    fontWeight: '700'
  }
});

export default styles;
