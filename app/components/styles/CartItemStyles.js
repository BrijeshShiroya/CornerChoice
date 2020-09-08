import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between'
  },
  itemImage: {
    height: 40,
    aspectRatio: 1.2
  }
});

export default styles;
