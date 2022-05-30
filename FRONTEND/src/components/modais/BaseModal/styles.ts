import styled from "styled-components";
import { IModalProps } from ".";

export const Modal = styled.div<IModalProps>`
  background-color: white;
  display: flex;
  position: fixed;
  flex-direction: column;
  width: 513px;
  height: 243px;
  transform: translate(-50%, -50%);
  left: 50%;
  padding: 24px;
  top: 50%;
  border-radius: 8px;
  box-shadow: 0 2px 8px #333;
  z-index: 11;
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div<IModalProps>`
  background: #000;
  height: 100vh;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100vw;
`;
export const CLoseIcon = styled.img`
  align-self: end;
  cursor: pointer;
`;
