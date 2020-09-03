import { StyleSheet } from 'react-native';
import { verticalScale, Colors, Fonts } from '../../theme';

const styles = StyleSheet.create({
  headerContainers: {
    marginLeft: 4,
    height: verticalScale(40),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6
  },
  headerTitle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.regular,
    color: Colors.themeGreen
  },
  listContainer: {
    paddingRight: 10
  }
});

export default styles;
