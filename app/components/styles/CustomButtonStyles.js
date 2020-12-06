import { StyleSheet } from 'react-native';
import { Colors, scale, verticalScale, Fonts } from '../../theme';

const styles = StyleSheet.create({
  buttonTouchable: {
    height: verticalScale(48),
    width: scale(150),
    backgroundColor: Colors.btnOrange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  disabledButton: {
    backgroundColor: Colors.rosyBrown
  },
  buttonText: {
    color: Colors.white,
    fontSize: Fonts.size.label,
    fontWeight: '500',
    fontFamily: Fonts.type.bold
  }
});

export default styles;
