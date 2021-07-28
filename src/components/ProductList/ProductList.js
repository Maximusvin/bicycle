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
  return (
    <Item active={status}>
      <ItemTopWrap active={status}>
        <ProductName>{name}</ProductName>-
        <ProductType>
          {type} ({color})
        </ProductType>
      </ItemTopWrap>

      <Id>ID: {id}</Id>

      <ItemBottomWrap>
        <ProductNameStatus>Status:</ProductNameStatus>

        <StatusPopap activeStatus={status} id={id} />

        <Price active={status}>{formatCurrency(Number(price))} UAH/hr.</Price>
      </ItemBottomWrap>

      <CloseButton active={status}>
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
