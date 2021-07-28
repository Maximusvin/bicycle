import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const PopapWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const PopapActiveItem = styled.p`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s linear;

  &::first-letter {
    text-transform: uppercase;
  }

  &:hover {
    color: ${COLORS.orange};
  }
`;

export const SelectText = styled.p`
  margin-right: 10px;
  color: rgba(43, 43, 43, 0.7);
`;

export const Popap = styled.div`
  z-index: 100;
  position: absolute;
  left: 0;
  top: 25px;
  width: max-content;
  background-color: #2f2f2f;
  padding: 5px 0;
  border: 0 solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%);
  color: #495057;
  background-color: #fff;
`;

export const PopapList = styled.ul`
  border-radius: 5px;
`;

export const PopapItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  background-color: ${props => (props.active ? 'rgba(115,102,255,0.7)' : '')};
  color: ${props => (props.active ? '#000' : '')};
  transition: all 0.2s linear;

  :hover {
    color: ${props => (props.active ? '' : '#fff')};
    background-color: ${props =>
      props.active ? 'rgba(115,102,255,0.7)' : '#7366ff'};
  }
`;
