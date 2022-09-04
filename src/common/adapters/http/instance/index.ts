import axios from 'axios';

export const createAxiosInstance = () => axios.create({
  baseURL: 'https://swapi.dev/api',
  timeout: 0,
});

const createHttpInstance = () => createAxiosInstance();

export default createHttpInstance;
