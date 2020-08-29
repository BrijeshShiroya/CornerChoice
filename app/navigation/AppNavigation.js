import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { forwardRef, useEffect, useState } from 'react';
import HomeScreen from '../modules/Home/HomeScreen';
import LaunchScreen from '../modules/LaunchScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SideMenuScreen from '../modules/SideMenu/SideMenuScreen';

const Drawer = createDrawerNavigator();
const PrimaryNav = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <LaunchScreen />;
  }
  return (
    <Drawer.Navigator
      drawerContent={SideMenuScreen}
      initialRouteName="HomeScreen"
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const RootStackScreen = (props, ref) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={ref}>
        <PrimaryNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default forwardRef(RootStackScreen);
