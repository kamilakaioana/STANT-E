import styled from "styled-components";
import CustomButton from "../../button";

export const ModalText = styled.text`
  font-size: 20px;
  font-weight: lighter;
  text-align: center;
  margin-top: 24px;
  letter-spacing: 0.22px;
`;

export const InfoMessage = styled.p`
  padding: 0;
  margin: 0;
  font-size: 24px;
  font-family: "Times New Roman", Times, serif;
`;

export const ContainerNotFound = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  text-align: end;
  align-self: center;
  /* padding: 100px; */
  padding-bottom: 24px;
`;
//

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

export const RemoverContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CancelarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ExcluirButton = styled(CustomButton).attrs({
  height: 42,
  fontSize: 14,
  borderRadius: 10,
})`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const SalveButton = styled(CustomButton).attrs({
  height: 42,
  fontSize: 14,
  borderRadius: 10,
})`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 4%;
  padding-right: 4%;
  /* margin-top: 65px; */
`;
