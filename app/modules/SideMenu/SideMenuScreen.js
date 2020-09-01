import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons, Colors } from '../../theme';
import styles from './SideMenuStyles';
import { useSelector } from 'react-redux';

const MenuData = [
  {
    title: 'Home',
    navigationScreen: 'HomeScreen',
    icon: Icons.home
  },
  {
    title: 'Products',
    navigationScreen: 'ProductListScreen',
    icon: Icons.products
  },
  {
    title: 'My Orders',
    navigationScreen: 'MyOrderScreen',
    icon: Icons.orders
  },
  {
    title: 'Complaints',
    navigationScreen: 'ComplainsScreen',
    icon: Icons.complains
  },
  {
    title: 'Terms',
    navigationScreen: 'TermsScreen',
    icon: Icons.terms
  },
  {
    title: 'Login',
    navigationScreen: 'AuthStack',
    icon: Icons.login
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
  const name = `${user?.first_name} ${user?.last_name}`;
  const email = user?.email || '--';

  const onItemPress = useCallback(
    (item, index) => {
      navigation.closeDrawer();
      navigation.navigate(item?.navigationScreen);
      setSelectedIndex(index);
    },
    [setSelectedIndex, navigation]
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
        />
      </View>
    </SafeAreaView>
  );
};

SideMenuHeader.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string
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
