import styled from 'styled-components';
import { COLORS } from 'assets/colors';

export const FormWrap = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 16px;
  padding-right: 21.5px;
`;

export const InputWrap = styled.div`
  width: 49%;
  margin-bottom: 10px;
`;

export const InputForm = styled.input`
  width: 100%;
  padding: 5px 16px;
  background: ${COLORS.lightGrey};
  border-radius: 5px;

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

  outline: none;
  resize: none;

  &::placeholder {
    font-size: 12px;
    line-height: 19px;
    color: ${COLORS.liteGrey};
  }
`;

export const TextareaWrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: ${COLORS.red100};
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
