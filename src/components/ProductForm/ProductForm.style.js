import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const FormWrap = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid ${COLORS.greyLine};
`;

export const InputForm = styled.input`
  width: 49%;
  padding: 5px 16px;
  background: ${COLORS.lightGrey};
  border-radius: 5px;
  margin-bottom: 10px;

  &::placeholder {
    font-size: 12px;
    line-height: 19px;
    color: ${COLORS.liteGrey};
  }
`;

export const TextareaForm = styled.textarea`
  width: 100%;
  padding: 5px 16px;
  height: 75px;
  background: ${COLORS.lightGrey};
  border-radius: 5px;
  margin-bottom: 10px;
  outline: none;
  resize: none;

  &::placeholder {
    font-size: 12px;
    line-height: 19px;
    color: ${COLORS.liteGrey};
  }
`;

export const Button = styled.button`
  width: 49%;
  padding: 4px 22px;
  border-radius: 5px;
  background: ${COLORS.grey};
  font-size: 14px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${COLORS.white};
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background: ${COLORS.liteGrey};
  }
`;
