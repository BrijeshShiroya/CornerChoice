import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  bg: {
    justifyContent: 'flex-start',
    flex: 1
  },
  listContainer: {
    paddingTop: 5,
    paddingBottom: 20,
    paddingRight: 4
  },
  marqueContainer: {
    marginTop: 3,
    backgroundColor: Colors.white,
    height: 36,
    justifyContent: 'center'
  },
  marque: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.regular,
    color: Colors.red
  }
});

export default styles;
