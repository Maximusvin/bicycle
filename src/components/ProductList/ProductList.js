import { useSelector } from 'react-redux';
import { GoTriangleDown, GoX } from 'react-icons/go';
import { getAllBicycles } from 'redux/bicycles/bicyclesSelector';

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
  const bicycles = useSelector(getAllBicycles);

  return (
    <ul>
      {bicycles &&
        bicycles.map(({ id, name, type, color, status, price }) => (
          <Item key={id}>
            <ItemTopWrap>
              <ProductName>{name}</ProductName>-
              <ProductType>
                {type} ({color})
              </ProductType>
            </ItemTopWrap>
            <Id>ID: {id}</Id>
            <ItemBottomWrap>
              <ProductNameStatus>Status:</ProductNameStatus>
              <ProductStatus>
                {status}
                <GoTriangleDown />
              </ProductStatus>
              <Price>{Number(price).toLocaleString()} UAH/hr.</Price>
            </ItemBottomWrap>

            <CloseButton>
              <GoX />
            </CloseButton>
          </Item>
        ))}
    </ul>
  );
};

export default ProductList;
