import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  verticalScale,
  scale,
  Colors,
  Fonts
} from '../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  safeTop: {
    flex: 1,
    backgroundColor: Colors.themeLightGreen
  },
  title: {
    fontSize: verticalScale(14),
    fontFamily: Fonts.type.regular,
    color: Colors.white,
    fontWeight: '500'
  },
  userIcon: {
    height: verticalScale(50),
    width: verticalScale(50),
    marginRight: scale(10)
  },
  menuIcon: {
    height: scale(20),
    width: scale(20),
    marginRight: scale(10)
  },
  flatlistContainer: {
    paddingTop: 10
  },
  container: {
    backgroundColor: Colors.white
  },
  header: {
    width: '100%',
    height: verticalScale(80),
    paddingHorizontal: verticalScale(15),
    backgroundColor: Colors.themeLightGreen,
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuItemContainer: {
    margin: scale(5),
    paddingHorizontal: scale(20),
    borderRadius: scale(5),
    height: verticalScale(40),
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuTitle: {
    fontSize: verticalScale(14),
    fontFamily: Fonts.type.regular,
    color: Colors.themeGreen,
    fontWeight: '600'
  }
});

export default styles;
