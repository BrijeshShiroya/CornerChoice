import { StyleSheet } from 'react-native';
import { verticalScale, Colors, Fonts, Metrics } from '../../theme';

const styles = StyleSheet.create({
  headerContainers: {
    marginLeft: 4,
    height: verticalScale(40),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
    width: Metrics.screenWidth - 12,
    alignSelf: 'center'
  },
  headerTitle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.regular,
    color: Colors.themeGreen
  },
  listContainer: {
    paddingRight: 10
  },
  emptyContainer: {
    flex: 1
  },
  emptyIcon: {
    height: 240,
    width: 240,
    marginTop: 40
  }
});

export default styles;
