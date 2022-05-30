import React, { ReactNode } from "react";
import { CloseIcon } from "../../icons";
import { CLoseIcon, Modal, Overlay } from "./styles";

export interface IModalProps {
  modalVisible: boolean;
  children?: ReactNode;
  handleClose?: () => void;
}

const BaseModal: React.FC<IModalProps> = ({
  modalVisible,
  children,
  handleClose,
}) => {
  return (
    <>
      <Modal
        modalVisible={modalVisible}
        style={{ display: modalVisible ? "flex" : "none" }}
      >
        {Boolean(handleClose) ? (
          <CLoseIcon
            height={32}
            width={32}
            src={CloseIcon}
            onClick={handleClose}
            alt="Um desenho de um menino caminhando sobre 3 livros empilhados"
          ></CLoseIcon>
        ) : null}

        {children}
      </Modal>
      <Overlay
        modalVisible={modalVisible}
        style={{ display: modalVisible ? "flex" : "none" }}
      />
    </>
  );
};

BaseModal.defaultProps = {
  modalVisible: false,
};
export default BaseModal;
