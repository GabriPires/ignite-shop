import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product';

const Product = () => {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 100,00</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          ducimus neque quo! Eum, eaque tempore vero quasi aspernatur ducimus
          neque quisquam, repellendus soluta beatae cupiditate. Magni nulla
          expedita odio maxime!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
};

export default Product;
