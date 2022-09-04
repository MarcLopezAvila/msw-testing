import { AxiosInstance } from 'axios';

interface Params {
  (instance: AxiosInstance, delay: number): void
}

export const setDelayInterceptor: Params = (instance, delay) => {
  instance.interceptors.request.use((config) => ({
    ...config,
    timer: performance.now(),
  }), (error) => Promise.reject(error));

  instance.interceptors.response.use(async (response) => {
    const minimumDelay = delay;
    const latency = performance.now() - (response.config.timer || 0);
    const shouldNotDelay = minimumDelay < latency;

    if (shouldNotDelay) {
      return response;
    }

    const remainder = minimumDelay - latency;
    const [responseWithDelay] = await Promise.all([
      response,
      new Promise((resolve) => {
        setTimeout(resolve, remainder);
      }),
    ]);

    return responseWithDelay;
  }, (error) => Promise.reject(error));
};
