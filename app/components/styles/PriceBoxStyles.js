import { StyleSheet } from 'react-native';
import { scale } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  radio: {
    height: 20,
    width: 20
  },
  priceContainer: {
    padding: scale(14),
    width: '100%'
  },
  radioTitle: {
    marginLeft: 10
  }
});

export default styles;
