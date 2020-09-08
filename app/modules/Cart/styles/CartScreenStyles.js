import { StyleSheet } from 'react-native';
import { Colors, scale, Fonts } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  leftIcon: {
    height: 24,
    width: 24
  },
  bg: {
    justifyContent: 'flex-start',
    flex: 1
  },
  listContainer: {
    width: '100%',
    flex: 1
  },
  total: {
    fontSize: scale(22),
    fontFamily: Fonts.type.bold
  },
  bottomView: {
    padding: 10,
    backgroundColor: Colors.white,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default styles;
