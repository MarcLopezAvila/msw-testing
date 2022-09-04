import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    timer?: number;
  }
}
