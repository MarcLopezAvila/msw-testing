import { Character } from 'common/models/Character';
import { getAvatarUrlFromId } from 'common/services/avatar';
import Avatar from 'common/components/avatar';
import { getUrlId } from 'common/utils/url';
import { Item, Name } from './People.styled';

interface Props {
  people: Character[]
}

const People = ({ people }: Props) => (
  <div>
    {people.map(({ url, name }) => (
      <Item>
        <Avatar url={getAvatarUrlFromId(getUrlId(url))} name={name} />
        <Name>{name}</Name>
      </Item>
    ))}
  </div>
);

export default People;
