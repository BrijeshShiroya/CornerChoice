import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, verticalScale } from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  bg: {
    justifyContent: 'flex-start',
    flex: 1
  },
  container: {
    height: 44,
    width: '100%',
    marginTop: 5,
    paddingHorizontal: 6
  },
  input: {
    color: Colors.white,
    paddingLeft: 32,
    paddingHorizontal: verticalScale(10),
    height: 40,
    backgroundColor: Colors.themeGreen,
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 20
  },
  imageIcon: {
    position: 'absolute',
    left: 15,
    top: 7,
    height: 26,
    width: 26
  }
});

export default styles;
