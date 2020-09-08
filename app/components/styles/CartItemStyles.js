import { StyleSheet } from 'react-native';
import { Colors, scale, Fonts } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    padding: 6,
    justifyContent: 'space-between'
  },
  itemImage: {
    height: 50,
    aspectRatio: 1.2
  },
  cartButtonContainer: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 4,
    backgroundColor: Colors.themeLightGreen,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  plusContainer: {
    height: '100%',
    width: 28,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  plus: {
    color: Colors.white,
    fontSize: scale(14),
    fontFamily: Fonts.type.regular,
    fontWeight: '600',
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: scale(13),
    marginBottom: 4,
    fontFamily: Fonts.type.regular
  },
  titleAttr: {
    fontSize: scale(10),
    marginBottom: 4,
    fontFamily: Fonts.type.regular
  }
});

export default styles;
