import styled from 'styled-components';
import logo from '../../assets/image/logo.svg'
import stante from '../../assets/image/stante.svg'


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

