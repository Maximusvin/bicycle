import { ProductForm, Statistics, ProductList } from 'components';
import { Wrapper, LeftColumn, RightColumn } from './Main.style';

const Main = () => {
  return (
    <Wrapper>
      <LeftColumn>
        <ProductList />
      </LeftColumn>

      <RightColumn>
        <ProductForm />
        <Statistics />
      </RightColumn>
    </Wrapper>
  );
};

export default Main;
