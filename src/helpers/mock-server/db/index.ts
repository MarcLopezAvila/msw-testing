import { factory, drop, primaryKey } from '@mswjs/data';
import { DB } from 'helpers/mock-server/types';

export const setupDB = () => factory({
  character: {
    name: primaryKey(String),
  },
});

export const dropDB = (db: DB) => drop(db);
