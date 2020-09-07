import React, { useState, useCallback, useEffect } from 'react';
import { Text, View } from 'react-native';
import {
  CustomButton,
  CustomTextInput,
  ImageBg,
  Loader
} from '../../components';
import strings from '../../constants/Strings';
import { ApplicationStyles } from '../../theme';
import styles from './styles/LoginScreenStyle';
import AuthActions from '../../redux/AuthRedux';
import { useSelector, useDispatch } from 'react-redux';
import { Toast } from 'native-base';
import { CommonActions } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { fetching, user, error } = useSelector((state) => state.auth);
  const resetAction = CommonActions.reset({ routes: [{ name: 'DrawerNav' }] });

  useEffect(() => {
    if (!fetching && error) {
      Toast.show({
        text: error,
        buttonText: 'Okay',
        duration: 3000
      });
    } else if (!fetching && user) {
      navigation.dispatch(resetAction);
    }
  }, [fetching, error, navigation, user, resetAction]);

  const onLoginPress = useCallback(() => {
    if (email !== '' && password !== '') {
      dispatch(AuthActions.authRequest({ email, password }));
    }
  }, [dispatch, email, password]);

  const onRegisterPress = () => {
    navigation.navigate('RegisterScreenScreen');
  };
  return (
    <View
      // behavior={'padding'}
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
        {fetching && <Loader />}
      </ImageBg>
    </View>
  );
};

export default LoginScreen;
