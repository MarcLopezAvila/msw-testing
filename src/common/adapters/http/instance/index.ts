import { API_URL } from 'application/config/variables';
import axios from 'axios';

export const createAxiosInstance = () => axios.create({
  baseURL: API_URL,
  timeout: 0,
});

const createHttpInstance = () => createAxiosInstance();

export default createHttpInstance;
