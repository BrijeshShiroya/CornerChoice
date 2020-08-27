import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ApplicationStyles } from '../theme';

const LaunchScreen = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={ApplicationStyles.screen.mainContainer}>
      <StatusBar barStyle="default" />
      <ActivityIndicator color={Colors.transparent} />
    </View>
  );
};

export default LaunchScreen;
