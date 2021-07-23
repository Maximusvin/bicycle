import { Wrapper, LeftColumn, RightColumn, Item } from './Main.style';

const Main = () => {
  return (
    <Wrapper>
      <LeftColumn>
        <ul>
          <Item>Product</Item>
          <Item>Product</Item>
          <Item>Product</Item>
          <Item>Product</Item>
          <Item>Product</Item>
          <Item>Product</Item>
          <Item>Product</Item>
        </ul>
      </LeftColumn>

      <RightColumn>
        <p>Form</p>
        <p>Statistics</p>
      </RightColumn>
    </Wrapper>
  );
};

export default Main;
