import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Colors, Icons } from '../../theme';
import styles from './SideMenuStyles';
import DeviceInfo from 'react-native-device-info';

const MenuData = [
  {
    title: 'Home',
    navigationScreen: 'HomeStack',
    icon: Icons.home
  },
  {
    title: 'Products',
    navigationScreen: 'ProductStack',
    icon: Icons.products
  },
  {
    title: 'My Orders',
    navigationScreen: 'MyOrderStack',
    icon: Icons.orders
  },
  {
    title: 'Complaints',
    navigationScreen: 'ComplainStack',
    icon: Icons.complains
  },
  {
    title: 'Terms',
    navigationScreen: 'TermsScreen',
    icon: Icons.terms
  }
];

const SideMenuHeader = (props) => {
  const userName = props?.name || 'Guest';
  const email = props?.email || '---';
  return (
    <View style={styles.header}>
      <Image source={Icons.user} style={styles.userIcon} />
      <View>
        <Text style={styles.title}>{userName}</Text>
        <Text style={styles.title}>{email}</Text>
      </View>
    </View>
  );
};

const SideMenuFooter = (props) => {
  const { user } = useSelector((state) => state.auth);
  const isLoggedIn = !!user;
  const item = {
    title: isLoggedIn ? 'Logout' : 'Login',
    navigationScreen: isLoggedIn ? 'HomeStack' : 'AuthStack',
    icon: Icons.login
  };
  const { selectedIndex, onFooterPress } = props;
  return (
    <MenuItem
      selected={selectedIndex === 5}
      item={item}
      onPress={() => onFooterPress(item, 5)}
    />
  );
};

const MenuItem = (props) => {
  const { title, icon } = props?.item;
  const { selected, onPress } = props;
  return (
    <TouchableOpacity
      style={[
        styles.menuItemContainer,
        {
          backgroundColor: selected ? Colors.drawerSelected : Colors.white
        }
      ]}
      onPress={onPress}
    >
      <Image source={icon} style={styles.menuIcon} resizeMode={'contain'} />
      <Text style={styles.menuTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const SideMenuScreen = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { user } = useSelector((state) => state.auth);
  const firstname = user?.first_name || 'Guest';
  const lastname = user?.last_name || '';
  const name = firstname + ' ' + lastname;
  const email = user?.email || '--';
  const dispatch = useDispatch();
  const isLoggedIn = !!user;
  const userId = DeviceInfo.getUniqueId();

  const onItemPress = useCallback(
    (item, index) => {
      navigation.closeDrawer();
      if ((index === 2 || index === 3) && !isLoggedIn) {
        navigation.navigate('AuthStack');
      } else {
        navigation.navigate(item?.navigationScreen);
      }
      if (index === 5) {
        setSelectedIndex(0);
        dispatch({
          type: 'LOGOUT',
          payload: {
            user_id: userId,
            session_id: userId
          }
        });
      } else {
        setSelectedIndex(index);
      }
    },
    [dispatch, setSelectedIndex, navigation, isLoggedIn, userId]
  );

  const renderItem = ({ item, index }) => (
    <MenuItem
      selected={selectedIndex === index}
      item={item}
      onPress={() => onItemPress(item, index)}
    />
  );

  return (
    <SafeAreaView edges={['right', 'top', 'left']} style={styles.safeTop}>
      <View style={styles.mainContainer}>
        <SideMenuHeader name={name} email={email} />
        <FlatList
          contentContainerStyle={styles.flatlistContainer}
          data={MenuData}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          ListFooterComponent={
            <SideMenuFooter
              selectedIndex={selectedIndex}
              onFooterPress={onItemPress}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

SideMenuHeader.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string
};

SideMenuFooter.propTypes = {
  selectedIndex: PropTypes.number,
  onFooterPress: PropTypes.func
};

MenuItem.propTypes = {
  item: PropTypes.object,
  selected: PropTypes.bool,
  onPress: PropTypes.func
};

SideMenuScreen.propTypes = {
  left: PropTypes.bool
};

export default SideMenuScreen;
