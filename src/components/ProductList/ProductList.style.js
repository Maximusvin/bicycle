import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const Item = styled.li`
  position: relative;
  width: 100%;
  background: ${COLORS.lightGrey};
  border: 2px solid ${COLORS.green};
  color: ${COLORS.lightBlack};
  border-radius: 10px;
  padding: 12px 13px 12px 18px;
  margin-bottom: 12px;
  transition: all 0.2s linear;

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
  font-size: 14px;
  line-height: 22px;
`;

export const ProductNameStatus = styled.p`
  text-transform: uppercase;
  margin-right: 18px;
`;

export const ProductStatus = styled.p`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Price = styled.p`
  font-size: 24px;
  color: ${COLORS.black};
  margin-left: auto;
`;

export const CloseButton = styled.button`
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
