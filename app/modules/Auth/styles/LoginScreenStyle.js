import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Colors,
  Fonts,
  verticalScale
} from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  bgImage: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainTitle: {
    fontFamily: Fonts.type.bold,
    fontSize: verticalScale(24),
    color: Colors.themeLightGreen
  },
  loginContainer: {
    width: '90%',
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 10
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: Colors.overlay
  },
  input: {
    paddingHorizontal: 10,
    height: verticalScale(44),
    width: '100%',
    borderWidth: 0.5,
    borderRadius: 10,
    marginBottom: verticalScale(15)
  },
  loginButton: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20
  },
  registerButton: {
    width: '100%',
    backgroundColor: Colors.grey,
    marginBottom: 10
  },
  avoidView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
