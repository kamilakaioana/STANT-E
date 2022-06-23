import styled from "styled-components";
import { ILeftNavBar } from ".";
import { colors } from "../../styles/colors";
import { MediaWidth } from "../../utils/constants";
import { CheckIcon } from "../icons";
const { mobileMax } = MediaWidth;

type ILeftNavBarProps = {
  selected?: boolean;
};

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: ${colors.fonts.white};
  font-weight: bolder;
  :hover {
    cursor: pointer;
  }
  @media (max-width: ${mobileMax}px) {
    font-size: 16px;
  }
`;

export const Ul = styled.ul<ILeftNavBar>`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  z-index: 99;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    background-color: ${colors.primary};
    margin-top: 0px;
    transition: transform 0.3s ease-in-out;
    padding-top: 1rem;
    position: fixed;
    height: 100vh;
    width: 300px;
    padding-inline-start: 0px;
  }
  @media (max-width: ${mobileMax}px) {
    width: 200px;
  }
`;

export const Li = styled.li<ILeftNavBarProps>`
  @media (max-width: 768px) {
    background-color: "transparent";
    padding: 18px 40px;
  }
  :hover {
    cursor: pointer;
    background-color: ${colors.secondary};
  }
`;

export const CheckedIcon = styled.img.attrs({
  src: CheckIcon,
  alt: "icone sinalizando o item selecionado",
})`
  width: 22px;
  height: 22px;
  align-items: center;
`;
