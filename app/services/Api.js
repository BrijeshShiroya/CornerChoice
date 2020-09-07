import Secrets from 'react-native-config';
import { apiConfig } from './Utils'; //apiConfig('http://choicecorner.in/admin/api/');

const api = apiConfig(__DEV__ ? Secrets.API_URL_DEBUG : Secrets.API_URL);

const auth = () => {
  const loginUser = (credentials) => api.post('login', credentials);
  const registerUser = (credentials) => api.post('registration', credentials);
  const swiperData = () => api.post('slider');
  const categoryData = () => api.post('categories');
  const productData = (isAttributed = true) =>
    api.post(isAttributed ? 'productsbylabel' : 'products');
  const productAttrData = (credentials) => api.post('attributes', credentials);
  const subCategoryData = (id) => api.post('subcategoriesbycatid', id);
  const subCategoryProductData = (id) => api.post('productsbycatid', id);
  const orderData = (userId) => api.post('myorder', userId);
  const complainData = (created_by) => api.post('complaints', created_by);

  return {
    loginUser,
    registerUser,
    swiperData,
    categoryData,
    productData,
    subCategoryData,
    subCategoryProductData,
    orderData,
    complainData,
    productAttrData
  };
};

export default {
  auth
};
