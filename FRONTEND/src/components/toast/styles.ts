import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";

export const Description = styled.p`
  margin: 0;
  text-align: left;
`;
export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 6px;
  width: 300px;
  height: 18px;
`;

const toastInRight = keyframes`
  from {
    transform: translateX(100%);

  }
  to {
    transform: translateX(0);
    /* transform: translateX(100%); */
  }
`;

export const Toast = styled.div`
  //toast
  height: 50px;
  width: 365px;
  color: ${colors.fonts.white};
  padding: 20px 15px 10px 10px;
  // notification
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 10px #999;
  color: #000;
  opacity: 0.9;

  transition: 0.3s ease;
  top: 1rem;

  right: 1rem;

  animation: ${toastInRight} 0.7s linear normal;

  :hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
  }
`;

export const CloseButton = styled.button`
  float: right;
  background: none;
  border: none;
  color: ${colors.fonts.white};
  opacity: 0.8;
  cursor: pointer;
`;

export const ContainerToast = styled.div`
  font-size: 14px;
  position: fixed;
  z-index: 99999;

  top: 1rem;
  right: 1rem;
  animation: ${toastInRight} 0.7s linear normal;
`;
