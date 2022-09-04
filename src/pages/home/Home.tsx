import { useState } from 'react';
import { Character } from 'common/models/Character';
import { searchPeople } from 'common/services/swapi';
import Search from './components/search';
import People from './components/people';

function Home() {
  const [results, setResults] = useState<Character[]>([]);

  const onSearch = async (search: string) => {
    const { data: { results } } = await searchPeople(search);
    setResults(results);
  };

  return (
    <div>
      <Search onSearch={onSearch} />
      <People people={results} />
    </div>
  );
}

export default Home;
