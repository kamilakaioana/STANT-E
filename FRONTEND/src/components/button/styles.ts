import styled from "styled-components";
import { IButtonProps } from ".";

export const Button = styled.button.attrs({
  type: "submit",
})<IButtonProps>`
  border-color: #${({ secondary }) => (secondary ? "164C64" : "00FFFF00")};
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: #${({ color, secondary }) => color || (secondary ? "00FFFF00" : "164C64")};
  border-radius: ${({ borderRadius }) => borderRadius || 20}px;
  font-size: ${({ fontSize }) => fontSize || 28}px;
  border: ${({ secondary }) => (secondary ? "2px solid" : "none")};
  color: #${({ textColor, secondary }) => textColor || (secondary ? "164C64" : "FFFFFF")};
  opacity: 1;
  font-weight: lighter;
  cursor: pointer;
  :disabled {
    opacity: 0.2;
  }
  :hover[disabled] {
    background-color: #${({ color, secondary }) => color || (secondary ? "00FFFF00" : "164C64")};
    color: #${({ textColor, secondary }) => textColor || (secondary ? "164C64" : "FFFFFF")};
    border-color: #${({ secondary }) => (secondary ? "164C64" : "00FFFF00")};
    transform: none;
  }
  :hover {
    background-color: #${({ colorHover, secondary }) => colorHover || (secondary ? "00FFFF00" : "338499")};
    border-color: #${({ secondary }) => (secondary ? "338499" : "00FFFF00")};
    color: #${({ textColor, secondary }) => (secondary ? "338499" : textColor || "FFFFFF")};
    transform: scale(1.05);
  }
`;
