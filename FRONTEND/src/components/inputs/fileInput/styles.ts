import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Label = styled.label`
  padding: 20px 10px;
  width: 200px;
  background-color: ${colors.lightGreen};
  color: ${colors.fonts.white};
  text-transform: uppercase;
  text-align: center;
  display: block;
  margin-top: 10px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bolder;
  letter-spacing: 0.3;
  :hover {
    background-color: ${colors.lightGreenHover};
    transform: scale(1.05);
  }
`;
