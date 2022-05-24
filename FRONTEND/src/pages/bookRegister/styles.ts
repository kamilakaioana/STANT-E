import { Input } from "../../components/input/styles";
import styled from 'styled-components';
import CustomButton from "../../components/button";
import ImageIcon from "../../assets/icon/image.svg";

export const InputContainer = styled.div`
display: flex; 
flex-direction: column;
padding: 0px 120px 40px 120px;
flex: 3;
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;

margin-top: 65px;
`;

export const Container = styled.div`
padding: 40px 120px;
flex-direction: column;
 display: flex; 
`;

export const AddImageContainer = styled.div`
background-color: #F5F2F2;
flex: 1;
align-items: center;
justify-content: center;
text-align: center;
flex-direction: column;
display: flex;
margin: 50px 0px;



`;

export const TitleInput = styled(Input).attrs({
  height: 80,
  fontSize: 24,
  placeholder: 'Titulo da obra',
  })`  
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ActorInput = styled(Input).attrs({
  height: 80,
  fontSize: 24,
  placeholder: 'Autor',
  })`  
  margin-top: 32px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const DescriptionInput = styled(Input).attrs({
  height: 80,
  fontSize: 24,
  placeholder: 'Descrição',
  })`  
  margin-top: 32px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const ExcluirButton = styled(CustomButton).attrs({
  height: 80,
  })`  
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const SalveButton = styled(CustomButton).attrs({
  height: 80,
  
  })`  
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
font-weight: lighter;
font-size: 32px;
color: #3F3B3B;
margin-left: 350px;

`;

export const Content = styled.div`
flex-direction: row;
display: flex; 
`;

export const Logo = styled.img.attrs({src: ImageIcon})`
 width: 210px;
 height: 210px;
 align-self: center;
`;

export const ButtonExcluirContainer = styled.div`

margin-right: 30px;
flex-direction: row;
display: flex; 
width: 100%;
`;
     
export const ButtonSalveContainer = styled.div`

margin-left: 30px;
width: 100%;
flex-direction: row;
`;
