import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const Wrapper = styled.footer`
  grid-area: footer;
  padding: 10px;
  background: ${COLORS.grey};
  color: ${COLORS.lightestGrey};
  font-size: 20px;
  line-height: 31px;
`;

export const DeveloperWrap = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  margin-left: auto;
`;

export const Developer = styled.p`
  margin-right: 10px;
`;

export const Name = styled.a`
  color: ${COLORS.white};
  transition: color 0.2s linear;

  &:hover {
    color: ${COLORS.orange};
  }
`;
