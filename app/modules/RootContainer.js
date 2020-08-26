import { Root } from 'native-base';
import React, { useRef } from 'react';
import { StatusBar, View } from 'react-native';
import AppNavigation from '../navigation/AppNavigation';
import { ApplicationStyles } from '../theme';

const RootContainer = () => {
  const navRef = useRef();
  return (
    <Root>
      <View style={[ApplicationStyles.screen.mainContainer]}>
        <StatusBar barStyle="dark-content" />
        <AppNavigation ref={navRef} />
      </View>
    </Root>
  );
};

export default RootContainer;
