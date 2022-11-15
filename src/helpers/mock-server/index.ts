import { setupServer } from 'msw/node';
import { dropDB, setupDB } from './db';
import { getHandlers } from './handlers';

export const startServer = () => {
  const db = setupDB();
  const server = setupServer(...getHandlers(db));

  beforeEach(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
    dropDB(db);
  });
  afterAll(() => server.close());

  return { server, db };
};
