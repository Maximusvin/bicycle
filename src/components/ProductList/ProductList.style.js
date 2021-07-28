import styled from 'styled-components';
import { COLORS } from 'assets/colors';

const getActiveColorByItem = activeStatus => {
  switch (activeStatus) {
    case 'available':
      return COLORS.green;
    case 'busy':
      return COLORS.orange;
    case 'unavailable':
      return COLORS.red50;
    default:
      return;
  }
};

export const Item = styled.li`
  position: relative;
  width: 100%;
  background: ${COLORS.lightGrey};
  color: ${COLORS.lightBlack};
  border-radius: 10px;
  padding: 12px 13px 12px 18px;
  margin-bottom: 12px;
  transition: all 0.2s linear;
  border: 2px solid ${COLORS.green};
  border: 2px solid ${props => getActiveColorByItem(props.active)};

  &:hover {
    background: ${COLORS.lightestGrey};
  }
`;

export const ItemTopWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 22px;
  text-transform: uppercase;
  margin-bottom: 1px;
  opacity: ${props => (props.active === 'unavailable' ? '50%' : '100%')};
`;

export const ProductName = styled.p`
  font-weight: bold;
  margin-right: 5px;
`;

export const ProductType = styled.p`
  margin-left: 5px;
`;

export const Id = styled.p`
  font-size: 8px;
  line-height: 13px;
  color: ${COLORS.liteGrey};
  margin-bottom: 5px;
`;

export const ItemBottomWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 22px;
`;

export const StatusWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProductNameStatus = styled.p`
  text-transform: uppercase;
  margin-right: 18px;
  opacity: 100%;
`;

export const Price = styled.p`
  font-size: 24px;
  color: ${COLORS.black};
  opacity: ${props => (props.active === 'unavailable' ? '50%' : '100%')};

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const CloseButton = styled.button`
  opacity: ${props => (props.active === 'unavailable' ? '50%' : '100%')};
  position: absolute;
  background: transparent;
  margin-right: 3px;
  cursor: pointer;
  padding: 2px;
  top: 8px;
  right: 8px;
  font-size: 14px;
  transition: all 0.2s linear;

  &:hover {
    color: ${COLORS.red};
  }
`;
