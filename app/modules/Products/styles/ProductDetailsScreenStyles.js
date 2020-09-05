import { StyleSheet } from 'react-native';
import { Colors, Fonts, verticalScale, scale } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    marginVertical: 20,
    backgroundColor: Colors.white,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center'
  },
  bg: {
    flex: 1
  },
  itemImage: {
    width: '90%',
    aspectRatio: 1.2
  },
  title: {
    fontFamily: Fonts.type.regular,
    fontWeight: '500',
    fontSize: Fonts.size.regular,
    marginTop: verticalScale(8)
  },
  price: {
    fontFamily: Fonts.type.regular,
    fontWeight: '500',
    alignSelf: 'flex-start',
    fontSize: Fonts.size.regular,
    marginLeft: scale(12)
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.black
  },
  description: {
    flexGrow: 1,
    width: '100%',
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    textAlign: 'center',
    marginTop: 7
  },
  bottomContainer: {
    width: '90%'
  },
  addToCart: {
    alignSelf: 'flex-end',
    marginBottom: verticalScale(10)
  }
});

export default styles;
