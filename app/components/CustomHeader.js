import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styles from './styles/CustomHeaderStyles';

const leftSection = (leftIcon, leftIconStyle, leftOnPress) => (
  <TouchableOpacity
    activeOpacity={0.7}
    hitSlop={styles.hitSlop}
    onPress={leftOnPress}
  >
    <Image source={leftIcon} style={[styles.iconStyle, leftIconStyle]} />
  </TouchableOpacity>
);
const CustomHeader = ({
  title = 'Header',
  titleStyle,
  headerStyle,
  left,
  leftIcon,
  leftIconStyle,
  leftOnPress
}) => (
  <SafeAreaView
    style={[styles.headerContainer, headerStyle]}
    forceInset={{ bottom: 'never' }}
  >
    {left && leftSection(leftIcon, leftIconStyle, leftOnPress)}
    <Text style={[styles.title, titleStyle]}>{title}</Text>
  </SafeAreaView>
);

CustomHeader.propTypes = {
  left: PropTypes.bool,
  leftIcon: PropTypes.number,
  leftOnPress: PropTypes.func,
  leftIconStyle: PropTypes.object,
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  headerStyle: PropTypes.object
};

export default CustomHeader;
