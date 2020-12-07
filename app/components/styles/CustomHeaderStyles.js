import { StyleSheet } from 'react-native';
import { Colors, scale, verticalScale, Fonts } from '../../theme';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: verticalScale(60),
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(12),
    justifyContent: 'space-between'
  },
  title: {
    fontSize: verticalScale(18),
    fontFamily: Fonts.type.bold,
    color: Colors.white,
    textAlign: 'center'
  },
  iconStyle: {
    height: verticalScale(30),
    width: scale(30),
    resizeMode: 'contain'
  },
  hitSlop: { left: 20, right: 20, top: 20, bottom: 20 }
});

export default styles;
