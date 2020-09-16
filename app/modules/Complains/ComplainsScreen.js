import { Container } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CustomHeader, ImageBg, Loader } from '../../components';
import strings from '../../constants/Strings';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/ComplainsScreenStyles';

const ComplainsItem = (props) => {
  const { order_id, created_date, description, status } = props;
  return (
    <View style={styles.orderItemContainer}>
      <View style={styles.orderTop}>
        <Text style={styles.order}>{created_date}</Text>
        <Text style={styles.order}>{order_id}</Text>
      </View>
      <View style={styles.orderBottom}>
        <Text style={styles.order}>{description}</Text>
        <Text style={styles.orderStatus}>{status}</Text>
      </View>
    </View>
  );
};

const ComplainsScreen = ({ navigation }) => {
  // const { user } = useSelector((state) => state.auth);
  const { fetching } = useSelector((state) => state.complain);
  const { count } = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     dispatch(ComplainActions.complainRequest({ created_by: user?.id }));
  //   });
  //   return unsubscribe;
  // }, [dispatch, user, navigation]);

  const onLeftPress = () => {
    navigation.openDrawer();
  };

  const onRightPress = () => {
    navigation.navigate('CartScreen');
  };

  // const renderItem = ({ item }) => {
  //   return <ComplainsItem {...item} />;
  // };
  const title = 'Coming Soon..';
  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        right
        rightTitle={count > 0 ? count : null}
        title={strings.titleComplaints}
        leftIcon={Icons.menu}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
        rightOnPress={onRightPress}
      />
      <ImageBg style={styles.bg}>
        {/* <FlatList
          style={styles.listContainer}
          data={complains}
          renderItem={renderItem}
        /> */}
        <View style={styles.container}>
          <Text style={styles.coming}>{title}</Text>
        </View>
      </ImageBg>
      {fetching && <Loader />}
    </Container>
  );
};

ComplainsItem.propTypes = {
  order_id: PropTypes.string,
  created_date: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string
};
export default ComplainsScreen;
