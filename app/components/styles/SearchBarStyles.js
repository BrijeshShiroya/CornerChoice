import { StyleSheet } from 'react-native';
import { verticalScale, Colors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: verticalScale(44),
    width: '100%'
  },
  input: {
    paddingHorizontal: verticalScale(10),
    height: verticalScale(40),
    backgroundColor: Colors.themeGreen,
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: verticalScale(22),
    marginHorizontal: verticalScale(20)
  }
});

export default styles;