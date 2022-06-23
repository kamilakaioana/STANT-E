import styled from "styled-components";
import { IinputProps } from ".";
import { colors, colorsNoHash } from "../../../styles/colors";
import { MediaWidth } from "../../../utils/constants";

const { mobileMax, tabletMax } = MediaWidth;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<IinputProps>`
  font-size: ${({ fontSize }) => fontSize || 22}px;
  height: 60px;
  border-radius: 20px;
  background-color: #${({ disabled }) => (disabled ? colorsNoHash.grayDisabled : colorsNoHash.inputDefault)};
  color: ${colors.fonts.light};
  padding-left: 24px;
  border: 2px solid;
  border-color: ${({ error }) => (error ? "red" : colors.gray)};
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 10%);
  &::placeholder {
    color: #cccccc;
    font-style: italic;
  }
  &:focus {
    outline: none;
    background-color: ${colors.grayfocus};
  }
  :hover[disabled] {
    cursor: no-drop;
  }
  @media (max-width: ${tabletMax}px) {
    font-size: 18px;
    height: 50px;
    border-radius: 15px;
  }
  @media (max-width: ${mobileMax}px) {
    font-size: 16px;
    height: 40px;
    border-radius: 10px;
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
