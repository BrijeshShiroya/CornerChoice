import Secrets from 'react-native-config';
import { apiConfig } from './Utils';

const api = apiConfig(__DEV__ ? Secrets.API_URL_DEBUG : Secrets.API_URL);

const auth = () => {
  const loginUser = (credentials) => api.post('login', credentials);
  const registerUser = (credentials) => api.post('registration', credentials);
  const swiperData = () => api.post('slider');
  const categoryData = () => api.post('categories');
  const productData = () => api.post('products');
  const orderData = (userId) => api.post('myorder', userId);
  const complainData = (created_by) => api.post('complaints', created_by);

  return {
    loginUser,
    registerUser,
    swiperData,
    categoryData,
    productData,
    orderData,
    complainData
  };
};

export default {
  auth
};
