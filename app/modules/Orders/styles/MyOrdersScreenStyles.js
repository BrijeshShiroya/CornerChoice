import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  orderItemContainer: {
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    justifyContent: 'space-between'
  },
  listContainer: {
    width: '100%'
  },
  bg: {
    justifyContent: 'flex-start',
    flex: 1
  },
  orderTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  orderBottom: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between'
  },
  orderStatus: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    color: Colors.themeGreen,
    fontWeight: '600'
  },
  order: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    fontWeight: '600'
  }
});

export default styles;
