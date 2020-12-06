import { StyleSheet } from 'react-native';
import { verticalScale, Colors, scale } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sliderContainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 4,
    marginTop: verticalScale(12)
  },
  thumb: {
    height: verticalScale(48),
    width: verticalScale(48),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  track: {
    borderWidth: 1.0,
    borderColor: Colors.txtBorder,
    height: verticalScale(48)
  },
  titleContainer: {
    position: 'absolute',
    top: verticalScale(10),
    bottom: 0,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  greet: {
    fontSize: scale(16)
  }
});

export default styles;
