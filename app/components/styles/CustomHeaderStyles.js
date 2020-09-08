import { StyleSheet } from 'react-native';
import { Colors, scale, verticalScale, Fonts } from '../../theme';
import { cps } from 'redux-saga/effects';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: verticalScale(60),
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    justifyContent: 'space-between'
  },
  iconView: {
    height: verticalScale(50),
    width: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    height: verticalScale(26),
    width: scale(26),
    resizeMode: 'contain'
  },
  title: {
    maxWidth: scale(200),
    fontSize: verticalScale(18),
    fontFamily: Fonts.type.bold,
    color: Colors.white,
    textAlign: 'center'
  },
  rightTitle: {
    color: Colors.white,
    fontFamily: Fonts.type.bold,
    fontSize: verticalScale(12),
    textAlign: 'center'
  },
  hitSlop: { left: 20, right: 20, top: 20, bottom: 20 }
});

export default styles;
