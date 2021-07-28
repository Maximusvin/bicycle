import { useSelector, useDispatch } from 'react-redux';
import { formatCurrency } from 'Functions';
import { getAllBicycles } from 'redux/bicycles/bicyclesSelector';
import { GoX } from 'react-icons/go';
import { LoaderUI } from 'UI';
import { StatusPopap } from 'components';
import { deleteBicycle } from 'redux/bicycles/bicyclesActions';

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
  StatusWrap,
  EmptyWrap,
} from './ProductList.style';

const ProductItem = ({ id, name, type, color, status, price }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteBicycle(id));
  };

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
        <StatusWrap>
          <ProductNameStatus>Status:</ProductNameStatus>

          <StatusPopap activeStatus={status} id={id} />
        </StatusWrap>

        <Price active={status}>{formatCurrency(Number(price))} UAH/hr.</Price>
      </ItemBottomWrap>

      <CloseButton active={status} onClick={handleDeleteItem}>
        <GoX />
      </CloseButton>
    </Item>
  );
};

const ProductList = () => {
  const bicycles = useSelector(getAllBicycles);

  return (
    <>
      {bicycles.length > 0 ? (
        <ul>
          {bicycles.map(item => (
            <ProductItem key={item.id} {...item} />
          ))}
        </ul>
      ) : (
        <EmptyWrap>
          <LoaderUI />
          <p>You are not connected to the server!</p>
          <p>
            Start local server: <code>npm run server</code>
          </p>
          <p>
            Api endpoint: <code>http://localhost:8080/bicycles</code>
          </p>
        </EmptyWrap>
      )}
    </>
  );
};

export default ProductList;
