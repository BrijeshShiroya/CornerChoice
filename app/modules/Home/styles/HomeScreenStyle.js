import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  bg: {
    justifyContent: 'flex-start',
    flex: 1
  }
});

export default styles;
