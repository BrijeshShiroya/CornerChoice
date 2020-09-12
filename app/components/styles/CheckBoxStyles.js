import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

const styles = StyleSheet.create({
  checkContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  check: {
    height: 20,
    width: 20
  },
  checkTitle: {
    marginLeft: 10,
    color: Colors.themeGreen,
    fontFamily: Fonts.type.regular,
    fontWeight: '500',
    fontSize: Fonts.size.medium
  }
});

export default styles;
