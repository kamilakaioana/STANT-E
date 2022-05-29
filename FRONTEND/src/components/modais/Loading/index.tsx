import React from 'react';
import BaseModal from '../BaseModal';
import LoadingBook from '../../../assets/image/loadingBook.svg'
import { ModalText } from './styles';

export interface ILoadingModalProps {
  modalVisible: boolean;
}

const LoadingModal: React.FC<ILoadingModalProps> = ({modalVisible}) => {
  return (
    <BaseModal modalVisible={modalVisible}>
      <div style={{display: 'flex', flexDirection: 'column'}}>

      <img src={LoadingBook} height={124} width={252}  alt="Um desenho de um menino caminhando sobre 3 livros empilhados" />
      <ModalText> <b>Carregando...</b> <br/>  Aguarde, enquanto buscamos seus registros.</ModalText>
      </div>
    </BaseModal>
  )
}

export default LoadingModal;
