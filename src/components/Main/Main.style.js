import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  grid-area: main;
`;

export const LeftColumn = styled.div`
  width: 55.5%;
  padding-top: 54px;
  padding-left: 12px;
  padding-right: 9px;
  border-right: 1px solid ${COLORS.greyLine};
`;

export const RightColumn = styled.div`
  padding-top: 55px;
  padding-left: 10px;
  padding-right: 21.5px;
  width: 45.5%;
`;

export const Item = styled.li`
  width: 100%;
  background: ${COLORS.lightGrey};
  border: 2px solid ${COLORS.green};
  border-radius: 10px;
  padding: 12px 13px 12px 18px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &:hover {
    background: ${COLORS.lightestGrey};
  }
`;
