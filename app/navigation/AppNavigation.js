import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React, { forwardRef, useEffect, useState } from 'react';
import HomeScreen from '../modules/Home/HomeScreen';
import ProductListScreen from '../modules/Products/ProductListScreen';
import LoginScreen from '../modules/Auth/LoginScreen';
import RegisterScreenScreen from '../modules/Auth/RegisterScreenScreen';
import MyOrderScreen from '../modules/Orders/MyOrdersScreen';
import TermsScreen from '../modules/Auth/TermsScreen';
import ComplainsScreen from '../modules/Complains/ComplainsScreen';
import LaunchScreen from '../modules/LaunchScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SideMenuScreen from '../modules/SideMenu/SideMenuScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ animationEnabled: false }}
      />
      <Stack.Screen
        name="RegisterScreenScreen"
        component={RegisterScreenScreen}
      />
    </Stack.Navigator>
  );
};
const PrimaryStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
        name="DrawerNav"
        component={DrawerNav}
        options={{ animationTypeForReplace: 'pop' }}
      />
    </Stack.Navigator>
  );
};
const DrawerNav = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <LaunchScreen />;
  }
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SideMenuScreen {...props} />}
      initialRouteName="HomeScreen"
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="ProductListScreen" component={ProductListScreen} />
      <Drawer.Screen name="MyOrderScreen" component={MyOrderScreen} />
      <Drawer.Screen name="TermsScreen" component={TermsScreen} />
      <Drawer.Screen name="ComplainsScreen" component={ComplainsScreen} />
      <Drawer.Screen name="AuthStack" component={AuthStack} />
    </Drawer.Navigator>
  );
};

const RootStackScreen = (props, ref) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={ref}>
        <PrimaryStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default forwardRef(RootStackScreen);
