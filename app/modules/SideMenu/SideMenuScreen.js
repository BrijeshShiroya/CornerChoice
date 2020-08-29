import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons, Colors } from '../../theme';
import styles from './SideMenuStyles';

const MenuData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Home'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item'
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
  const { title, onPress } = props?.item;
  const { selected } = props;
  return (
    <TouchableOpacity
      style={[
        styles.menuItemContainer,
        {
          backgroundColor: selected ? `red` : Colors.white
        }
      ]}
      onPress={onPress}
    >
      <Image
        source={Icons.home}
        style={styles.menuIcon}
        resizeMode={'contain'}
      />
      <Text style={styles.menuTitle}>{title}</Text>
    </TouchableOpacity>
  );
};
const SideMenuScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const name = 'Murtaza Tarwala';
  const email = 'Admin@admin.com';

  const onItemPress = (index) => {
    setSelectedIndex(index);
  };

  const renderItem = ({ item, index }) => (
    <MenuItem item={item} selected={true} onPress={() => onItemPress(index)} />
  );

  return (
    <SafeAreaView edges={['right', 'top', 'left']} style={styles.safeTop}>
      <View style={styles.mainContainer}>
        <SideMenuHeader name={name} email={email} />
        <FlatList
          contentContainerStyle={styles.flatlistContainer}
          data={MenuData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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
  title: PropTypes.string,
  selected: PropTypes.bool
};

SideMenuScreen.propTypes = {
  left: PropTypes.bool
};

export default SideMenuScreen;
