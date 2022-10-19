import Link from 'next/link';
import { ImageContainer, SuccessContainer } from '../styles/pages/success';

const Success = () => {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuu! <strong>Gabriel Pires</strong>, sua{' '}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
        casa.
      </p>

      <Link href={'/'}>Voltar ao catalogo</Link>
    </SuccessContainer>
  );
};

export default Success;
