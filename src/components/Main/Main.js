import { ProductForm, Statistics, ProductList, Skeleton } from 'components';
import { Wrapper, LeftColumn, RightColumn } from './Main.style';

const Main = ({ isLoading }) => {
  return (
    <Wrapper>
      <LeftColumn>{isLoading ? <Skeleton /> : <ProductList />}</LeftColumn>

      <RightColumn>
        <ProductForm />
        <Statistics />
      </RightColumn>
    </Wrapper>
  );
};

export default Main;
