import styled from 'styled-components';
import { IinputProps } from '.';

export const Input = styled.input<IinputProps>`
font-size: ${({fontSize}) => fontSize || 24}px;
height: ${({height}) => height ?? 66}px;
background-color: #F5F2F2;
color: #3F3B3B;
width: 100%;
border: none;
padding-left: 24px;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
&::placeholder {
  color: #cccccc;
  font-style: italic;
}
&:focus{
outline: none;
}
`;

export const Container = styled.div`
 display: flex;
 flex-direction: row;
 border: 1px solid #F5F2F2;
 border-radius: 20px;
 box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 10%);
`;

export const Button = styled.button`
  height: 66px;
  width: 66px;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #164C64;
`;

export const InputContainer = styled.div`
  border: none;
  width: 100%;
`;

