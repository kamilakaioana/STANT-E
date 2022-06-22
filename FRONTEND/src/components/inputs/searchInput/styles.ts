import styled from "styled-components";
import { IinputProps } from ".";
import { colors } from "../../../styles/colors";
import { MediaWidth } from "../../../utils/constants";

const { mobileMax, tabletMax } = MediaWidth;

export const Input = styled.input<IinputProps>`
  font-size: ${({ fontSize }) => fontSize || 24}px;
  height: ${({ height }) => height ?? 60}px;
  background-color: ${colors.inputDefault};
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
    background-color: ${colors.grayfocus};
  }
  ::-webkit-search-cancel-button {
    /* -webkit-appearance: none; */
  }
  @media (max-width: ${tabletMax}px) {
    font-size: 18px;
    height: 50px;
  }
  @media (max-width: ${mobileMax}px) {
    font-size: 16px;
    height: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #f5f2f2;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 10%);
  @media (max-width: ${tabletMax}px) {
    border-radius: 15px;
  }
  @media (max-width: ${mobileMax}px) {
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  height: 66px;
  width: 66px;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${colors.primary};

  :hover {
    background-color: ${colors.secondary};
    cursor: pointer;
  }
  @media (max-width: ${tabletMax}px) {
    width: 50px;
    height: 50px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  @media (max-width: ${mobileMax}px) {
    width: 40px;
    height: 40px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const InputContainer = styled.div`
  border: none;
  width: 100%;
`;

export const IconSearch = styled.img`
  height: 24px;
  width: 24px;
`;
