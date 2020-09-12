import { StyleSheet } from 'react-native';
import { Colors, Fonts, verticalScale } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg: {
    justifyContent: 'flex-start',
    flex: 1
  },
  itemsContainer: {
    width: '90%',
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 14,
    margin: 10
  },
  priceBox: {
    alignItems: 'flex-end'
  },
  input: {
    paddingHorizontal: 10,
    height: verticalScale(44),
    width: '100%',
    borderWidth: 0.5,
    borderRadius: 10,
    marginBottom: verticalScale(15)
  },
  separator: {
    height: 1.5,
    backgroundColor: Colors.black
  },
  placeOrderBtn: {
    backgroundColor: Colors.grey,
    width: '100%'
  },
  subContainer: {
    flex: 1,
    marginRight: 10
  },
  con: {
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 1
  },
  subTitle: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    fontWeight: '400',
    marginVertical: 10
  },
  radioButton: {
    color: Colors.themeGreen
  },
  priceTitle: {
    color: Colors.themeGreen,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    fontWeight: '600',
    marginLeft: 7
  },
  price: {
    color: Colors.black,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    fontWeight: '600'
  }
});

export default styles;
