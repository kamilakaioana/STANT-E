import styled from "styled-components";
import { IinputProps } from ".";
import { colors } from "../../../styles/colors";

export const Input = styled.input<IinputProps>`
  font-size: ${({ fontSize }) => fontSize || 24}px;
  height: ${({ height }) => height ?? 66}px;
  background-color: #f5f2f2;
  color: ${colors.fonts.light};
  width: 100%;
  border: none;
  padding-left: 24px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: ${({ showButton }) => (showButton ? 0 : 20)}px;
  border-bottom-right-radius: ${({ showButton }) => (showButton ? 0 : 20)}px;
  &::placeholder {
    color: #cccccc;
    font-style: italic;
  }
  &:focus {
    outline: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #f5f2f2;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 10%);
`;

export const Button = styled.button`
  height: 66px;
  width: 66px;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${colors.primary};
`;

export const InputContainer = styled.div`
  border: none;
  width: 100%;
`;
