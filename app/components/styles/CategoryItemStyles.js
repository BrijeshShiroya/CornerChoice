import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: (Metrics.screenWidth - 16) / 3,
    marginLeft: 4,
    marginBottom: 4,
    aspectRatio: 1.2,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.white
  },
  image: {
    height: '40%',
    width: '40%'
  },
  title: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    fontWeight: '500'
  }
});

export default styles;
