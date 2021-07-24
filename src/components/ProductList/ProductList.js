import { GoTriangleDown, GoX } from 'react-icons/go';

import {
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
} from './ProductList.style';

const ProductList = () => {
  return (
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
  );
};

export default ProductList;
