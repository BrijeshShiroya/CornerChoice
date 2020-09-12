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
import ProductDetailsScreen from '../modules/Products/ProductDetailsScreen';
import CartScreen from '../modules/Cart/CartScreen';
import PlaceOrderScreen from '../modules/Cart/PlaceOrderScreen';
import SubCategoryScreen from '../modules/Products/SubCategoryScreen';
import SubCategoryProductsScreen from '../modules/Products/SubCategoryProductsScreen';
import SearchProductScreen from '../modules/Products/SearchProductScreen';

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
const HomeStack = () => {
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName={'HomeScreen'}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ animationEnabled: false }}
      />
      <Stack.Screen name="SubCategoryScreen" component={SubCategoryScreen} />
      <Stack.Screen
        name="SearchProductScreen"
        component={SearchProductScreen}
      />
      <Stack.Screen
        name="SubCategoryProductsScreen"
        component={SubCategoryProductsScreen}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name={'PlaceOrderScreen'} component={PlaceOrderScreen} />
    </Stack.Navigator>
  );
};
const ProductStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
        name="ProductListScreen"
        component={ProductListScreen}
        options={{ animationEnabled: false }}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
      <Stack.Screen
        name="SearchProductScreen"
        component={SearchProductScreen}
      />
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

const MyOrderStack = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
        name="MyOrderScreen"
        component={MyOrderScreen}
        options={{ animationEnabled: false }}
      />
      <Stack.Screen name="CartScreen" component={CartScreen} />
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
      initialRouteName="HomeStack"
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="ProductStack" component={ProductStack} />
      <Drawer.Screen name="MyOrderStack" component={MyOrderStack} />
      <Drawer.Screen name="TermsScreen" component={TermsScreen} />
      <Drawer.Screen name="ComplainsScreen" component={ComplainsScreen} />
      <Drawer.Screen name="AuthStack" component={AuthStack} />
      <Drawer.Screen name="CartScreen" component={CartScreen} />
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
