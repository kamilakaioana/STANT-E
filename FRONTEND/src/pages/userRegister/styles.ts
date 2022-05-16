import styled from 'styled-components';
import logo from '../../assets/image/logo.svg'
import stante from '../../assets/image/stante.svg'
import organizedBooksImg from "../../assets/image/organizedBooks.svg"


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

export const InputContainer = styled.div`
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
`;

export const FormContainer = styled.div`
justify-content: center;
align-items: center;
text-align: center;
`;

export const PasswordInputContainer = styled.div`
margin-top: 16px;
margin-bottom: 40px;
`;

export const InputItemContainer = styled.div`
margin-top: 16px;
margin-bottom: 16px;
`;
