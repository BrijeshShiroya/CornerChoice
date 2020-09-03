import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts, verticalScale } from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: (Metrics.screenWidth - 30) / 2,
    marginBottom: 10,
    marginLeft: 10,
    aspectRatio: 1.3,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.white
  },
  image: {
    height: '60%',
    width: '60%'
  },
  title: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    fontWeight: '500'
  },
  separator: {
    backgroundColor: Colors.black,
    height: 2,
    width: '100%'
  },
  priceContainer: {
    width: '80%'
  },
  price: {
    marginTop: verticalScale(5),
    width: '100%',
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    fontWeight: '600'
  }
});

export default styles;
