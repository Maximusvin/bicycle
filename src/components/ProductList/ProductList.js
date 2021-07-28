import { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatCurrency } from 'Functions';
import { getAllBicycles } from 'redux/bicycles/bicyclesSelector';
import { GoX } from 'react-icons/go';
import { StatusPopap } from 'components';
import {
  Item,
  ItemTopWrap,
  ItemBottomWrap,
  ProductName,
  ProductType,
  Id,
  ProductNameStatus,
  CloseButton,
  Price,
} from './ProductList.style';

const ProductItem = ({ id, name, type, color, status, price }) => {
  const [activeItem, setActiveItem] = useState(status);

  return (
    <Item active={activeItem}>
      <ItemTopWrap active={activeItem}>
        <ProductName>{name}</ProductName>-
        <ProductType>
          {type} ({color})
        </ProductType>
      </ItemTopWrap>

      <Id>ID: {id}</Id>

      <ItemBottomWrap>
        <ProductNameStatus>Status:</ProductNameStatus>

        <StatusPopap
          status={status}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />

        <Price active={activeItem}>
          {formatCurrency(Number(price))} UAH/hr.
        </Price>
      </ItemBottomWrap>

      <CloseButton>
        <GoX />
      </CloseButton>
    </Item>
  );
};

const ProductList = () => {
  const bicycles = useSelector(getAllBicycles);

  return (
    <ul>
      {bicycles &&
        bicycles.map(item => <ProductItem key={item.id} {...item} />)}
    </ul>
  );
};

export default ProductList;
