import { Wrapper, Image } from './Avatar.styled';

interface Props {
  url: string
  name: string
}

const Avatar = ({ url, name }: Props) => (
  <Wrapper>
    <Image src={url} alt={name} />
  </Wrapper>
);

export default Avatar;
