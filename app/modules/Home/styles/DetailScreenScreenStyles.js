import { StyleSheet } from 'react-native';
import { Colors, Fonts, verticalScale } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  btnVariation: {
    width: '90%',
    marginVertical: verticalScale(12),
    alignSelf: 'center'
  },
  btnContainerTitle: {
    color: Colors.white,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h5,
    alignSelf: 'center'
  }
});

export default styles;
