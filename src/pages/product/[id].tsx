import { useRouter } from 'next/router';

const Product = () => {
  const {
    query: { id },
  } = useRouter();

  return <h1>Product {id}</h1>;
};

export default Product;
