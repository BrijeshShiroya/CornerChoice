import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Colors,
  Fonts,
  verticalScale
} from '../../../theme';

export const stepIndicatorStyle = {
  stepIndicatorSize: 10,
  currentStepIndicatorSize: 10,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: Colors.themeGreen,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: Colors.themeGreen,
  stepStrokeUnFinishedColor: Colors.themeGreen,
  separatorFinishedColor: Colors.themeGreen,
  separatorUnFinishedColor: Colors.themeGreen,
  stepIndicatorFinishedColor: Colors.themeGreen,
  stepIndicatorUnFinishedColor: Colors.themeGreen,
  stepIndicatorCurrentColor: Colors.themeGreen,
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: Colors.transparent,
  stepIndicatorLabelFinishedColor: Colors.transparent,
  stepIndicatorLabelUnFinishedColor: Colors.transparent,
  labelColor: Colors.themeGreen,
  labelSize: 13,
  currentStepLabelColor: Colors.themeGreen
};

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  listContainer: {
    width: '100%'
  },
  bg: {
    justifyContent: 'flex-start',
    flex: 1
  },
  stepIndicatorContainer: {
    width: '100%',
    marginVertical: verticalScale(15)
  },
  orderDetailsItemContainer: {
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  statusText: {
    color: Colors.themeGreen,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    fontWeight: '500'
  },
  date: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    fontWeight: '400'
  },
  footerContainer: {
    marginHorizontal: 15,
    width: '90%'
  },
  cancelOrder: {
    width: '100%',
    alignSelf: 'flex-end',
    backgroundColor: Colors.grey
  },
  input: {
    paddingHorizontal: 10,
    height: verticalScale(100),
    width: '100%',
    borderWidth: 0.5,
    borderRadius: 10,
    marginBottom: verticalScale(15),
    backgroundColor: Colors.white,
    textAlignVertical: 'top'
  },
  stepTitle: {
    fontFamily: Fonts.type.regular,
    fontSize: 10,
    textAlign: 'center'
  }
});

export default styles;
