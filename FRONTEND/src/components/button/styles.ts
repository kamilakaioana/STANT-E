import styled from "styled-components";
import { IButtonProps } from ".";

export const Button = styled.button.attrs({
  type: 'submit',
})<IButtonProps>`
width: 100%;
height: ${({height}) => height}px;
background-color: #${({color}) => color || '164C64'};
border-radius: 20px;
font-size: 32px;
color: #${({textColor}) => textColor};
opacity: ${({disabled}) => disabled ? 0.2 : 1};
`;


