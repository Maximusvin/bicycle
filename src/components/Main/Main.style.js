import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  grid-area: main;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  width: 55.5%;
  padding-top: 54px;
  padding-left: 12px;
  padding-right: 9px;
  border-right: 1px solid ${COLORS.greyLine};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightColumn = styled.div`
  padding-top: 55px;
  padding-left: 10px;
  width: 45.5%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
