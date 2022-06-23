import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 40px;
  background-color: ${colors.secondary};
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  z-index: 2000;
  border-radius: 50px;
  display: flex;

  box-shadow: 2px 2px 2px 1px ${colors.boxShadown};
  :hover {
    background-color: ${colors.primary};
    cursor: pointer;
  }
`;
export const PlusIconImg = styled.img`
  height: 40px;
  width: 40px;
`;
