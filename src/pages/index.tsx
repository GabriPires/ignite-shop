import type { NextPage } from 'next';
import Image from 'next/future/image';
import { styled } from '../styles';
import { HomeContainer, Product } from '../styles/pages/home';

import camiseta1 from '../assets/camisetas/1.png';
import camiseta2 from '../assets/camisetas/2.png';

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt={'Camiseta'} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} width={520} height={480} alt={'Camiseta'} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
};

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
  border: 'none',
  padding: '4px 8px',
});

export default Home;
