import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
    <NavigationContainer ref={ref}>
      {loading ? (
        <LaunchScreen />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default forwardRef(RootStackScreen);
