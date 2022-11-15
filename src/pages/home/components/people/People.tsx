import { Character } from 'common/models/Character';
import { Item, Name } from './People.styled';

interface Props {
  people: Character[]
}

const People = ({ people }: Props) => (
  <div>
    {people.map(({ name }) => (
      <Item>
        <Name>{name}</Name>
      </Item>
    ))}
  </div>
);

export default People;
