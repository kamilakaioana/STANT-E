import styled from 'styled-components';
import { IinputProps } from '.';

export const Input = styled.input<IinputProps>`
font-size: ${({fontSize}) => fontSize || 24}px;
width: ${({width}) => width}px;
height: ${({height}) => height}px;
border-radius: 20px;
background-color: #F5F2F2;
color: #3F3B3B;
padding-left: 24px;
border: none;
&::placeholder {
  color: #cccccc;
}

`;

