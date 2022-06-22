import React from "react";
import BaseModal from "../BaseModal";
import Confirm from "../../../assets/image/confirm.svg";
import { Container, ModalText } from "./styles";

export interface ILoadingBookModalProps {
  modalVisible: boolean;
}

const LoadingBookModal: React.FC<ILoadingBookModalProps> = ({
  modalVisible,
}) => {
  return (
    <BaseModal modalVisible={modalVisible}>
      <Container>
        <img
          src={Confirm}
          height={124}
          width={252}
          style={{
            alignSelf: "center",
            justifySelf: "center",
          }}
          alt="Um desenho de um menino caminhando sobre 3 livros empilhados"
        />
        <ModalText>
          Recuperando informações do livro
          <br /> selecionado.
        </ModalText>
      </Container>
    </BaseModal>
  );
};

export default LoadingBookModal;
