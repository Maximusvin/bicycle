import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const Wrapper = styled.div`
  border-top: 1px solid ${COLORS.greyLine};
  padding-top: 8px;
  color: ${COLORS.black};
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Line = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  font-weight: 700;
  margin-left: 5px;
`;
