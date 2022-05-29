import React, { ReactNode } from 'react';
import {Modal, Overlay} from './styles';

export interface IModalProps {
  modalVisible: boolean;
  children?: ReactNode;
}

const BaseModal: React.FC<IModalProps> = ({modalVisible, children}) => {
  return (
    <>
     <Modal modalVisible={modalVisible} style={{display: modalVisible ? 'flex' : 'none'}}>
        {children}
      </Modal>
        <Overlay modalVisible={modalVisible} style={{display: modalVisible ? 'flex' : 'none'}}/>
    </>
       
  );
}

BaseModal.defaultProps={
  modalVisible: false,
}
export default BaseModal;