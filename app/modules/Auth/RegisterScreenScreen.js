import React, { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  View
} from 'react-native';
import { CustomButton, CustomTextInput } from '../../components';
import strings from '../../constants/Strings';
import { ApplicationStyles, Images } from '../../theme';
import styles from './styles/RegisterScreenScreenStyles';

const RegisterScreenScreen = ({ navigation }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const onLoginPress = () => {
    navigation.goBack();
  };

  const onRegisterPress = () => {};

  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={ApplicationStyles.screen.mainContainer}
    >
      <ImageBackground source={Images.splash} style={styles.bgImage}>
        {/* <KeyboardAvoidingView behavior={'padding'} style={styles.avoidView}> */}
        <View style={styles.overlay} />
        <Text style={styles.mainTitle}>{strings.registerLogin}</Text>
        <View style={styles.loginContainer}>
          <CustomTextInput
            value={firstname}
            placeholder={'First Name'}
            style={styles.input}
            onChangeText={(text) => setFirstname(text)}
          />
          <CustomTextInput
            value={lastname}
            placeholder={'Last Name'}
            style={styles.input}
            onChangeText={(text) => setLastname(text)}
          />
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
          <CustomTextInput
            value={phone}
            keyboardType={'numeric'}
            maxLength={10}
            placeholder={'Phone'}
            style={styles.input}
            onChangeText={(text) => setPhone(text)}
          />
          <CustomButton
            title={'REGISTER NOW'}
            style={styles.registerButton}
            onPress={onRegisterPress}
          />
          <CustomButton
            title={'LOGIN'}
            style={styles.loginButton}
            onPress={onLoginPress}
          />
        </View>
        {/* </KeyboardAvoidingView> */}
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreenScreen;
