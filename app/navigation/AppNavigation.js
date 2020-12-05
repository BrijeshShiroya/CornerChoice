import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { forwardRef, useEffect } from 'react';
import HomeScreen from '../modules/Home/HomeScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const RootStackScreen = (props, ref) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={ref}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default forwardRef(RootStackScreen);
