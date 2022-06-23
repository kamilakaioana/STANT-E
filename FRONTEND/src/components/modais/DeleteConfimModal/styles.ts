import styled from "styled-components";
import { colors } from "../../../styles/colors";
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
  font-size: 22px;
`;

export const ContainerNotFound = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  text-align: end;
  align-self: center;
  padding-bottom: 24px;
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
  box-shadow: 2px 2px 2px 1px ${colors.boxShadown};
`;

export const SalveButton = styled(CustomButton).attrs({
  height: 42,
  fontSize: 14,
  borderRadius: 10,
})`
  box-shadow: 2px 2px 2px 1px ${colors.boxShadown};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 4%;
  padding-right: 4%;
`;
