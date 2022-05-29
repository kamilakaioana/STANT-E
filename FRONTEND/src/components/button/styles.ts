import styled from "styled-components";
import { IButtonProps } from ".";

export const Button = styled.button.attrs({
  type: 'submit',
})<IButtonProps>`
width: 100%;
height: ${({height}) => height}px;
background-color: #${({color, secondary}) => color || (secondary ? '00FFFF00' : '164C64')};
border-radius: 20px;
font-size: 28px;
color: #${({textColor, secondary}) => textColor || (secondary ? '164C64' : 'FFFFFF')};
opacity: ${({disabled}) => disabled ? 0.2 : 1};
font-weight: lighter;
`;


