import React, { useState } from 'react';
import { Wrapper } from './Search.styled';

interface Props {
  onSearch: (search: string) => void
}

const Search = ({ onSearch }: Props) => {
  const [searchText, setSearchSearch] = useState('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setSearchSearch(target.value);
  const handleSearch = () => onSearch(searchText);

  return (
    <Wrapper>
      <input type="text" placeholder="character name" onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
    </Wrapper>
  );
};

export default Search;
