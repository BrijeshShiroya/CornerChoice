import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Colors,
  Fonts,
  verticalScale
} from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  listContainer: {
    width: '100%'
  },
  bg: {
    justifyContent: 'flex-start',
    flex: 1
  },
  orderDetailsItemContainer: {
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  statusText: {
    color: Colors.themeGreen,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    fontWeight: '500'
  },
  date: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    fontWeight: '400'
  },
  footerContainer: {
    marginTop: 20,
    marginHorizontal: 15
  },
  cancelOrder: {
    width: '100%',
    alignSelf: 'flex-end',
    backgroundColor: Colors.grey
  },
  input: {
    paddingHorizontal: 10,
    height: verticalScale(100),
    width: '100%',
    borderWidth: 0.5,
    borderRadius: 10,
    marginBottom: verticalScale(15),
    backgroundColor: Colors.white,
    textAlignVertical: 'top'
  }
});

export default styles;
