import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const cafeApi = axios.create({
  baseURL: 'https://mern-cafe-rsst.onrender.com/api',
});

cafeApi.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers['x-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default cafeApi;