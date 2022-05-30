import React from "react";
import BaseModal from "../BaseModal";
import {
  ButtonContainer,
  ButtonExcluirContainer,
  ButtonSalveContainer,
  ContainerNotFound,
  ExcluirButton,
  InfoMessage,
  SalveButton,
} from "./styles";
import PendingApproval from "./../../../assets/image/pendingApproval.svg";
import { CloseIcon } from "../../icons";

export interface ILoadingModalProps {
  modalVisible: boolean;
  handleDelete: () => void;
  handleCancel: () => void;
}

const DeleteConfimModal: React.FC<ILoadingModalProps> = ({
  modalVisible,
  handleCancel,
  handleDelete,
}) => {
  return (
    <BaseModal modalVisible={modalVisible} handleClose={handleCancel}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ContainerNotFound>
          <InfoMessage>
            <br />
            <b>
              Tem certeza que <br />
              deseja
              <span style={{ color: "red" }}> excluir </span>?
            </b>
            <br />
            Essa ação não poderá
            <br /> ser desfeita. <br />
          </InfoMessage>
          <img
            src={PendingApproval}
            height={134}
            width={149}
            alt="Um desenho de um menino em pé segurando um arquivo ao lado de um ponto de interrogação, aguardando confirmacao"
            style={{ marginLeft: 40 }}
          />
        </ContainerNotFound>
        <ButtonContainer>
          <ButtonExcluirContainer>
            <ExcluirButton
              onClickButton={handleDelete}
              secondary
              text={"EXCLUIR"}
            />
          </ButtonExcluirContainer>
          <ButtonSalveContainer>
            <SalveButton text={"CANCELAR"} onClickButton={handleCancel} />
          </ButtonSalveContainer>
        </ButtonContainer>
      </div>
    </BaseModal>
  );
};

export default DeleteConfimModal;
