import styled from "styled-components";
import { ILeftNavBar } from ".";
import { colors } from "../../styles/colors";
import { MediaWidth } from "../../utils/constants";

const { mobileMax } = MediaWidth;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: ${colors.fonts.white};
  font-weight: bolder;
  font-family: Times;
  :hover {
    background-color: ${colors.primary};
    border-radius: 5%;
    cursor: pointer;
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
    width: 250px;
  }
  @media (max-width: ${mobileMax}px) {
    width: 180px;
  }
`;
export const Li = styled.li`
  @media (max-width: 768px) {
    padding: 18px 10px;
    color: #fff;
  }
  :hover {
    /* background-color: ${colors.primary}; */

    cursor: pointer;
    /* background-color: ${colors.secondary}; */
  }
`;
