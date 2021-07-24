import { GoTriangleDown, GoX } from 'react-icons/go';
import { ProductForm } from 'components';

import {
  Wrapper,
  LeftColumn,
  RightColumn,
  Item,
  ItemTopWrap,
  ItemBottomWrap,
  ProductName,
  ProductType,
  Id,
  ProductNameStatus,
  ProductStatus,
  CloseButton,
  Price,
} from './Main.style';

const Main = () => {
  return (
    <Wrapper>
      <LeftColumn>
        <ul>
          <Item>
            <ItemTopWrap>
              <ProductName>Name</ProductName>-
              <ProductType>Type (Color)</ProductType>
            </ItemTopWrap>
            <Id>ID: ХХХХХХХХХХХХХ</Id>
            <ItemBottomWrap>
              <ProductNameStatus>Status:</ProductNameStatus>
              <ProductStatus>
                Available
                <GoTriangleDown />
              </ProductStatus>
              <Price>00.00 UAH/hr.</Price>
            </ItemBottomWrap>

            <CloseButton>
              <GoX />
            </CloseButton>
          </Item>

          <Item>
            <ItemTopWrap>
              <ProductName>Name</ProductName>-
              <ProductType>Type (Color)</ProductType>
            </ItemTopWrap>
            <Id>ID: ХХХХХХХХХХХХХ</Id>
            <ItemBottomWrap>
              <ProductNameStatus>Status:</ProductNameStatus>
              <ProductStatus>
                Available
                <GoTriangleDown />
              </ProductStatus>
              <Price>00.00 UAH/hr.</Price>
            </ItemBottomWrap>

            <CloseButton>
              <GoX />
            </CloseButton>
          </Item>

          <Item>
            <ItemTopWrap>
              <ProductName>Name</ProductName>-
              <ProductType>Type (Color)</ProductType>
            </ItemTopWrap>
            <Id>ID: ХХХХХХХХХХХХХ</Id>
            <ItemBottomWrap>
              <ProductNameStatus>Status:</ProductNameStatus>
              <ProductStatus>
                Available
                <GoTriangleDown />
              </ProductStatus>
              <Price>00.00 UAH/hr.</Price>
            </ItemBottomWrap>

            <CloseButton>
              <GoX />
            </CloseButton>
          </Item>

          <Item>
            <ItemTopWrap>
              <ProductName>Name</ProductName>-
              <ProductType>Type (Color)</ProductType>
            </ItemTopWrap>
            <Id>ID: ХХХХХХХХХХХХХ</Id>
            <ItemBottomWrap>
              <ProductNameStatus>Status:</ProductNameStatus>
              <ProductStatus>
                Available
                <GoTriangleDown />
              </ProductStatus>
              <Price>00.00 UAH/hr.</Price>
            </ItemBottomWrap>

            <CloseButton>
              <GoX />
            </CloseButton>
          </Item>

          <Item>
            <ItemTopWrap>
              <ProductName>Name</ProductName>-
              <ProductType>Type (Color)</ProductType>
            </ItemTopWrap>
            <Id>ID: ХХХХХХХХХХХХХ</Id>
            <ItemBottomWrap>
              <ProductNameStatus>Status:</ProductNameStatus>
              <ProductStatus>
                Available
                <GoTriangleDown />
              </ProductStatus>
              <Price>00.00 UAH/hr.</Price>
            </ItemBottomWrap>

            <CloseButton>
              <GoX />
            </CloseButton>
          </Item>
        </ul>
      </LeftColumn>

      <RightColumn>
        <ProductForm />
        <p>Statistics</p>
      </RightColumn>
    </Wrapper>
  );
};

export default Main;
