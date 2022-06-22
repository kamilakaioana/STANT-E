import styled from "styled-components";
import { colors } from "../../../styles/colors";

type IIputFileProps = {
  disabled?: boolean;
};

export const Label = styled.label<IIputFileProps>`
  padding: 20px 10px;
  width: 200px;
  background-color: ${colors.lightGreen};
  color: ${colors.fonts.white};
  text-transform: uppercase;
  text-align: center;
  display: block;
  margin-top: 10px;
  border-radius: 20px;
  font-weight: bolder;
  letter-spacing: 0.3;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  :hover {
    cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};
    background-color: ${({ disabled }) =>
      disabled ? colors.lightGreen : colors.lightGreenHover};
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.05)")};
  }
`;
