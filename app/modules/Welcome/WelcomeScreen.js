import { View } from 'native-base';
import React, { useCallback, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppBackground, CustomButton, CustomTextInput } from '../../components';
import { Strings } from '../../constants';
import WelcomeActions from '../../redux/WelcomeRedux';
import { Colors, Icons } from '../../theme';
import styles from './styles/WelcomeScreenStyle';

const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
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
    dispatch(WelcomeActions.welcomeRequest({ username: userName }));
    navigation.navigate('HomeScreen');
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

  return (
    <AppBackground>
      <View style={styles.container}>
        {renderUserName()}
        {renderFooter()}
      </View>
    </AppBackground>
  );
};

export default HomeScreen;
