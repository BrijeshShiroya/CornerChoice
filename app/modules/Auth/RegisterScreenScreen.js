import React, { useState, useEffect, useCallback } from 'react';
import { Text, View } from 'react-native';
import { CustomButton, CustomTextInput, ImageBg } from '../../components';
import strings from '../../constants/Strings';
import { ApplicationStyles } from '../../theme';
import styles from './styles/RegisterScreenScreenStyles';
import { useSelector, useDispatch } from 'react-redux';
import { Toast } from 'native-base';
import AuthActions from '../../redux/AuthRedux';

const RegisterScreenScreen = ({ navigation }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const { fetching, user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetching && error) {
      Toast.show({
        text: error,
        buttonText: 'Okay',
        duration: 3000
      });
    } else if (!fetching && user) {
      navigation.navigate('HomeScreen');
    }
  }, [fetching, error, navigation, user]);

  const onLoginPress = () => {
    navigation.goBack();
  };

  const showToast = () => {
    Toast.show({
      text: 'Please fill all Data',
      buttonText: 'Okay',
      duration: 3000
    });
  };

  const onRegisterPress = useCallback(() => {
    if (
      email !== '' &&
      password !== '' &&
      firstname !== '' &&
      lastname !== ''
    ) {
      dispatch(
        AuthActions.registerRequest({
          email,
          password,
          phone,
          first_name: firstname,
          last_name: lastname
        })
      );
    } else {
      showToast();
    }
  }, [dispatch, email, password, phone, firstname, lastname]);

  return (
    <View style={ApplicationStyles.screen.mainContainer}>
      <ImageBg style={styles.bg}>
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
      </ImageBg>
    </View>
  );
};

export default RegisterScreenScreen;
