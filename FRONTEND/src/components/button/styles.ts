import styled from "styled-components";

interface IButtonProps {
  width: number;
  height: number;
  color: string;
}

export const Button = styled.button<IButtonProps>`
width: ${({width}) => width}px;
height: ${({height}) => height}px;
background-color: #${({color}) => color || '164C64'};
border-radius: 20px;
color: #fff;
font-size: 32px;
`;


