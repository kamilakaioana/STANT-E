import styled from "styled-components";
import { IinputProps } from ".";
import { colors, colorsNoHash } from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<IinputProps>`
  font-size: ${({ fontSize }) => fontSize || 24}px;
  height: ${({ height }) => height}px;
  border-radius: 20px;
  background-color: #${({ disabled }) => (disabled ? colorsNoHash.grayDisabled : "f5f2f2")};
  color: ${colors.fonts.light};
  padding-left: 24px;
  border: ${({ error }) => (error ? "2px solid" : "none")};
  border-color: ${({ error }) => (error ? "red" : "#000")};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: #cccccc;
    font-style: italic;
  }
  &:focus {
    outline: none;
  }
`;

export const ErrorContainer = styled.div`
  height: 30px;
`;

export const Error = styled.p`
  color: red;
  font-size: 16px;
  margin-top: 4px;
  text-align: left;
  margin-left: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-left: 16px;
  margin-bottom: 4px;
  font-style: italic;
  font-weight: bold;
  color: ${colors.fonts.gray};
`;
export const LabelContainer = styled.div`
  text-align: start;
  display: flex;
`;
