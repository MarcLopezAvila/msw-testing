import { render, screen, userEvent } from 'helpers/test-utils';
import { startServer } from 'helpers/mock-server';
import { DB } from 'helpers/mock-server/types';
import Home from './Home';

const initialData = {
  yoda: { name: 'Yoda' },
  luke: { name: 'Luke' },
};

const setInitialData = (db: DB) => {
  db.character.create(initialData.yoda);
  db.character.create(initialData.luke);
};

describe('<Home>', () => {
  const { db } = startServer();

  it('loads and displays greeting', async () => {
    render(<Home />);

    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('search for a star wars character', async () => {
    setInitialData(db);
    render(<Home />);

    const input = screen.getByPlaceholderText('character name');
    const button = screen.getByText('Search');

    await userEvent.type(input, 'Yoda');
    await userEvent.click(button);

    expect(await screen.findByText('Yoda')).toBeInTheDocument();
    expect(await screen.queryByText('Luke')).not.toBeInTheDocument();
  });
});
