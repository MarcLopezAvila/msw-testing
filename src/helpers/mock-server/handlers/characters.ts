import { rest } from 'msw';
import { API_URL } from 'application/config/variables';
import { DB } from 'helpers/mock-server/types';

export const getCharacters = (db: DB) => rest.get(`${API_URL}/people`, (req, res, ctx) => {
  const search = req.url.searchParams.get('search');
  if (search) {
    const characters = db.character.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    });
    return res(ctx.json({ results: characters }));
  }
  return res(ctx.json({ results: [] }));
});

const getHandlers = (db: DB) => [
  getCharacters(db),
];

export default getHandlers;
