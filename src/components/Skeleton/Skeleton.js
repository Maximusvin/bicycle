import { LoaderUI } from 'UI/LoaderUI';
import {
  Item,
  ItemTopWrap,
  ItemBottomWrap,
  Id,
  ProductNameStatus,
  Price,
  LoaderWrap,
  CloseButton,
} from './Skeleton.style';

const skeletonItem = Array(3).fill(0);

const Skeleton = () => {
  return (
    <ul>
      {skeletonItem.map((item, idx) => (
        <Item key={idx}>
          <ItemTopWrap />
          <Id />
          <ItemBottomWrap>
            <ProductNameStatus />
            <Price />
          </ItemBottomWrap>

          <CloseButton />

          <LoaderWrap>
            <LoaderUI />
          </LoaderWrap>
        </Item>
      ))}
    </ul>
  );
};

export default Skeleton;
