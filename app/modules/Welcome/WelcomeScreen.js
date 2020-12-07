import React, { useCallback, useEffect, useState } from 'react';
import { Image, Platform, View } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  AppBackground,
  CustomButton,
  CustomTextInput,
  Greets
} from '../../components';
import { Strings } from '../../constants';
import WelcomeActions from '../../redux/WelcomeRedux';
import { Colors, Icons } from '../../theme';
import styles from './styles/WelcomeScreenStyle';
import Info from '../../services/DeviceTypeChecker';
import { showToast } from '../../services/Utils';

const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [emulator, setEmulator] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    Info.isEmulator().then((isEmulator) => setEmulator(isEmulator));
  }, [setEmulator]);
  const renderUserName = () => {
    return (
      <View style={styles.inputContainer}>
        <Image source={Icons.user} style={styles.left} />
        <CustomTextInput
          value={userName}
          placeholder={Strings.userNamePlaceholder}
          placeholderTextColor={Colors.txtBorder}
          style={styles.input}
          onChangeText={(text) => setUserName(text)}
        />
      </View>
    );
  };

  const onSubmitPress = useCallback(() => {
    if (userName === '') {
      showToast('Please enter username');
    } else {
      dispatch(WelcomeActions.welcomeRequest({ username: userName }));
      navigation.navigate('HomeScreen');
    }
  }, [userName, dispatch, navigation]);

  const renderFooter = () => {
    return (
      <CustomButton
        title={Strings.btnSubmit}
        style={styles.btnLogin}
        onPress={onSubmitPress}
      />
    );
  };

  const renderIsEmulator = () => {
    const title = emulator
      ? `You are running app in ${
          Platform.OS === 'ios' ? 'simulator' : 'emulator'
        }`
      : 'You are running app in real device';
    return <Greets title={title} style={styles.greets} />;
  };

  return (
    <AppBackground>
      <View style={styles.container}>
        {renderIsEmulator()}
        {renderUserName()}
        {renderFooter()}
      </View>
    </AppBackground>
  );
};

export default HomeScreen;
