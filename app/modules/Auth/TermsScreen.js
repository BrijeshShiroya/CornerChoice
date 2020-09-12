import { Container, Toast } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux';
import { CustomHeader, Loader } from '../../components';
import strings from '../../constants/Strings';
import API from '../../services/Api';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/TermsScreenStyles';

const api = API.auth();
const TermsScreen = ({ navigation }) => {
  const { count } = useSelector((state) => state.cart);
  const [exchangeReturn, setExchangeReturn] = useState('');
  const [privacyPolicy, setPrivacyPolicy] = useState('');
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setShowProgress(true);
      const response = await api.policy();
      setShowProgress(false);
      if (response?.data?.status && response?.data?.message === 'Success') {
        const res = response?.data?.data?.[0];
        setExchangeReturn(res?.exchange_return);
        setPrivacyPolicy(res?.privacy_policy);
      } else {
        Toast.show({
          text: 'Something went wrong',
          buttonText: 'Okay',
          duration: 3000
        });
      }
    });
    return unsubscribe;
  }, [navigation, setExchangeReturn, setPrivacyPolicy, setShowProgress]);

  const onLeftPress = () => {
    navigation.openDrawer();
  };

  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        right
        rightTitle={count > 0 ? count : null}
        title={strings.titlePolicy}
        leftIcon={Icons.menu}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
      />
      <View style={styles.container}>
        <WebView
          showsVerticalScrollIndicator={false}
          source={{ html: `${exchangeReturn} <hr> ${privacyPolicy}` }}
        />
      </View>
      {showProgress && <Loader />}
    </Container>
  );
};

export default TermsScreen;
