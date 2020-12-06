import { StyleSheet } from 'react-native';
import { ApplicationStyles, verticalScale } from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.form,
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  btnContinue: {
    width: '90%',
    marginVertical: verticalScale(20),
    alignSelf: 'center'
  }
});

export default styles;
