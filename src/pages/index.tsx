import type { NextPage } from 'next';
import { styled } from '../styles';

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello next</h1>
      <Button>Click</Button>
    </>
  );
};

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  border: 'none',
  padding: '4px 8px',
});

export default Home;
