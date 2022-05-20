import styled from 'styled-components';
import { IinputProps } from '.';


export const Input = styled.input<IinputProps>`
font-size: ${({fontSize}) => fontSize || 24}px;
height: ${({height}) => height}px;
border-radius: 20px;
background-color: #F5F2F2;
color: #3F3B3B;
padding-left: 24px;
border: ${({error}) => error ? "2px solid" : "none"};
border-color: ${({error}) => error ? "red" : "#000"};
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
&::placeholder {
  color: #cccccc;
  font-style: italic;
}
&:focus{
outline: none;
}

`;

export const ErrorContainer = styled.div`
height: 30px;
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const Error = styled.p`
color: red;
font-size: 16px;
margin-top: 4px;
text-align: left;
margin-left: 8px;
`;