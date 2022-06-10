import React from "react";
import BaseModal from "../BaseModal";
import LoadingBook from "../../../assets/image/loadingBook.svg";
import { Container, ModalText } from "./styles";

export interface ILoadingModalProps {
  modalVisible: boolean;
}

const LoadingModal: React.FC<ILoadingModalProps> = ({ modalVisible }) => {
  return (
    <BaseModal modalVisible={modalVisible}>
      <Container>
        <img
          src={LoadingBook}
          height={124}
          width={252}
          alt="Um desenho de um menino caminhando sobre 3 livros empilhados"
        />
        <ModalText>
          <b>Carregando...</b> <br /> Aguarde, enquanto buscamos seus registros.
        </ModalText>
      </Container>
    </BaseModal>
  );
};

export default LoadingModal;
