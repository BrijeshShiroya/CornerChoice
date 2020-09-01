import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { CustomButton, CustomTextInput, ImageBg } from '../../components';
import strings from '../../constants/Strings';
import { ApplicationStyles } from '../../theme';
import styles from './styles/LoginScreenStyle';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLoginPress = () => {};

  const onRegisterPress = () => {
    navigation.navigate('RegisterScreenScreen');
  };

  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={ApplicationStyles.screen.mainContainer}
    >
      <ImageBg>
        <Text style={styles.mainTitle}>{strings.titleLogin}</Text>
        <View style={styles.loginContainer}>
          <CustomTextInput
            value={email}
            placeholder={'Email ID'}
            keyboardType={'email-address'}
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
          />
          <CustomTextInput
            secureTextEntry
            value={password}
            placeholder={'Password'}
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
          />
          <CustomButton
            title={'LOGIN'}
            style={styles.loginButton}
            onPress={onLoginPress}
          />
          <CustomButton
            title={'REGISTER NOW'}
            style={styles.registerButton}
            onPress={onRegisterPress}
          />
        </View>
      </ImageBg>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
