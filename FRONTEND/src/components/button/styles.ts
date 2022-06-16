import styled from "styled-components";
import { IButtonProps } from ".";
import { colorsNoHash } from "../../styles/colors";
import { MediaWidth } from "../../utils/constants";

const { primary, transparent, fonts } = colorsNoHash;

const { mobileMax, tabletMax, screenSmallMax } = MediaWidth;

export const Button = styled.button.attrs({
  type: "submit",
})<IButtonProps>`
  border-color: #${({ secondary }) => (secondary ? primary : transparent)};
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: #${({ color, secondary }) => color || (secondary ? transparent : primary)};
  border-radius: ${({ borderRadius }) => borderRadius || 20}px;
  font-size: ${({ fontSize }) => fontSize || 22}px;

  @media (max-width: ${screenSmallMax}px) {
    font-size: 18px;
  }
  @media (max-width: ${tabletMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${mobileMax}px) {
    font-size: 14px;
  }
  border: ${({ secondary }) => (secondary ? "2px solid" : "none")};
  color: #${({ textColor, secondary }) => textColor || (secondary ? primary : fonts.white)};
  opacity: 1;
  font-weight: lighter;
  cursor: pointer;
  :disabled {
    opacity: 0.2;
  }
  :hover[disabled] {
    background-color: #${({ color, secondary }) => color || (secondary ? transparent : primary)};
    color: #${({ textColor, secondary }) => textColor || (secondary ? primary : fonts.white)};
    border-color: #${({ secondary }) => (secondary ? primary : transparent)};
    transform: none;
    cursor: no-drop;
  }
  :hover {
    background-color: #${({ colorHover, secondary }) => colorHover || (secondary ? transparent : colorsNoHash.secondary)};
    border-color: #${({ secondary }) => (secondary ? colorsNoHash.secondary : transparent)};
    color: #${({ textColor, secondary }) => (secondary ? colorsNoHash.secondary : textColor || fonts.white)};
    transform: scale(1.05);
  }
`;
