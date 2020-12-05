import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { forwardRef, useEffect, useState } from 'react';
import HomeScreen from '../modules/Home/HomeScreen';
import LaunchScreen from '../modules/LaunchScreen';

const Stack = createStackNavigator();

const RootStackScreen = (props, ref) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={ref}>
        {loading ? (
          <LaunchScreen />
        ) : (
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default forwardRef(RootStackScreen);
