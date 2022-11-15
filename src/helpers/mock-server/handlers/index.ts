import { DB } from 'helpers/mock-server/types';
import getCharacterHandlers from './characters';

export const getHandlers = (db: DB) => [
  ...getCharacterHandlers(db),
];
