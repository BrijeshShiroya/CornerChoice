import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../../theme';

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
  }
});

export default styles;
