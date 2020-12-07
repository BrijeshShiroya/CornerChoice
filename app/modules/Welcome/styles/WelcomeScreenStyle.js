import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Colors,
  scale,
  verticalScale
} from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  inputContainer: {
    width: '90%',
    borderWidth: 1.0,
    borderColor: Colors.txtBorder,
    borderRadius: verticalScale(4),
    height: verticalScale(61),
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: verticalScale(8)
  },
  input: {
    height: verticalScale(61),
    paddingLeft: verticalScale(30),
    color: Colors.txtPlaceholderColor,
    fontSize: scale(15)
  },
  btnLogin: {
    width: '90%',
    marginVertical: verticalScale(12),
    alignSelf: 'center'
  },
  left: {
    position: 'absolute',
    left: 8,
    justifyContent: 'center',
    paddingLeft: 5
  },
  greets: {
    marginBottom: verticalScale(50),
    fontSize: scale(20)
  }
});

export default styles;
