import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const Wrapper = styled.header`
  position: fixed;
  grid-area: header;
  padding: 4px 16px;
  background: ${COLORS.grey};
  color: ${COLORS.lightGrey};
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
`;

export const Logo = styled.h1`
  font-family: 'SairaStencilOne', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;

  @media (max-width: 576px) {
    font-size: 22px;
    text-align: center;
  }
`;
