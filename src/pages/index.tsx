import { useKeenSlider } from 'keen-slider/react';
import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/future/image';
import { HomeContainer, Product } from '../styles/pages/home';

import 'keen-slider/keen-slider.min.css';
import Stripe from 'stripe';
import { stripe } from '../lib/stripe';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

const Home: NextPage<HomeProps> = ({ products }) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className={'keen-slider'}>
      {products.map((product, index) => (
        <Product key={index} className={'keen-slider__slide'}>
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt={'Camiseta'}
          />
          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: Number(price.unit_amount) / 100,
    };
  });

  console.log(response.data);

  return {
    props: {
      products,
    },
  };
};
