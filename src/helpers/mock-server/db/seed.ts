import { DB } from 'helpers/mock-server/types';

const initialData = {
  yoda: { name: 'Yoda' },
  luke: { name: 'Luke' },
  leia: { name: 'Leia' },
};

export const setInitialData = (db: DB) => {
  db.character.create(initialData.yoda);
  db.character.create(initialData.luke);
  db.character.create(initialData.leia);
};
