import styled from 'styled-components';
import logo from '../../assets/image/logo.svg'
import stante from '../../assets/image/stante.svg'
import organizedBooksImg from "../../assets/image/organizedBooks.svg"
import { Link } from 'react-router-dom';
import CustomInput from '../../components/input';

export const Container = styled.div`
display: flex;
height: 100vh;
`;

export const LogoContainer = styled.div`
  background-color: #7BBBAD;
  display: flex;
  flex: 1 ;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  background-color: #FDFDFD;
  display: flex;
  flex: 1 ;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
 align-items: center;
 justify-content: center;
 display: flex;
 flex-direction: column;
`;

export const Logo = styled.img.attrs({src: logo})`
 width: 174px;
 height: 174px;
`;

export const Brand = styled.img.attrs({src: stante})`
  width: 323px;
 height: 92px; 
 margin-top: 24px;
`;

export const OrganizedBooksImg = styled.img.attrs({src: organizedBooksImg})`
  width: 303px;
 height: 244px; 
 margin-bottom: 32px; 
 
 /* @media (min-width: 700px) {

 }; */

`;

export const FormContainer = styled.div`
justify-content: center;
align-items: center; 
text-align: center;  
align-self: center;
width: 100%;
`;

export const InputContainer = styled.div`
display: flex; 
flex-direction: column;
padding: 0px 120px 40px 120px;
`;

export const EmailInput = styled(CustomInput).attrs({
  height: 80,
  type: 'email',
  fontSize: 24,
  placeholder: 'Email',
  name: 'email',
  })`  
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const PasswordInput = styled(CustomInput).attrs({
  height: 80,
  type: 'password',
  fontSize: 24,
  placeholder: 'Senha',
  name: 'password',
  })`  
  margin-top: 32px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const LinkContainer = styled.div`
align-content: center;
justify-content: center;
margin-top: 24px;
`;

export const LinkRegister = styled(Link).attrs({
  to: '/register'
})`
color: black;
`;

export const ButtonContainer = styled.div`
padding: 0px 120px;
`;
