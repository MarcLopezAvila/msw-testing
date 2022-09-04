import createHttpInstance from './instance';
import { setDelayInterceptor } from './interceptors';

const instance = createHttpInstance();

setDelayInterceptor(instance, 500);

export const Get = instance.get;

export { instance };
