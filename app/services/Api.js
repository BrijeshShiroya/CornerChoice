import Secrets from 'react-native-config';
import { apiConfig } from './Utils';

const api = apiConfig(__DEV__ ? Secrets.API_URL_DEBUG : Secrets.API_URL);

const auth = () => {
  const loginUser = (credentials) => api.post('login', credentials);
  const swiperData = () => api.post('slider');
  const forgotPassword = (email) =>
    api.post('/api/v1/user/forgot-password', { email: email });

  return {
    loginUser,
    swiperData,
    forgotPassword
  };
};

export default {
  auth
};
