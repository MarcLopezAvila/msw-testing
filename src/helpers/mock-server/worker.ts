import { setupWorker } from 'msw';
import { setupDB } from './db';
import { setInitialData } from './db/seed';
import { getHandlers } from './handlers';

export const startWorker = () => {
  const db = setupDB();
  setInitialData(db);
  const worker = setupWorker(...getHandlers(db));
  return worker.start();
};
