import { Input } from "../../components/input/styles";
import styled from 'styled-components';
import CustomButton from "../../components/button";

export const InputContainer = styled.div`
display: flex; 
flex-direction: column;
padding: 0px 120px 40px 120px;
flex: 3;
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
background-color: white;
`;

export const Container = styled.div`
padding: 0px 120px;
flex-direction: row;
 display: flex; 
background-color: aliceblue;

`;

export const AddImageContainer = styled.div`
background-color: pink;
flex: 1;
align-items: center;
justify-content: center;
text-align: center;
`;

export const TitleInput = styled(Input).attrs({
  height: 80,
  fontSize: 24,
  placeholder: 'Titulo da obra',
  })`  
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ActorInput = styled(Input).attrs({
  error: "esse INPUT",
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
  margin-right: 20px;
  margin-top: 32px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const SalveButton = styled(CustomButton).attrs({
  height: 80,
  
  })`  
  margin-left: 50px;
  margin-top: 32px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;



     