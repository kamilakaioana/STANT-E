import { Link } from "react-router-dom";
import styled from "styled-components";
import brand from "../../assets/image/brand.svg";
import { colors } from "../../styles/colors";
import { MediaWidth } from "../../utils/constants";
import Burger from "../Burguer";

const { tabletMax } = MediaWidth;

export const Container = styled.div`
  height: 80px;
  background-color: ${colors.secondary};
  width: 100%;
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const LogoContainer = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin-right: 80px;
  @media (max-width: ${tabletMax}px) {
    justify-content: start;
    padding-left: 20px;
  }
`;

export const Logo = styled.img.attrs({ src: brand })`
  width: 188px;
  height: 50px;
  @media (max-width: ${tabletMax}px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  height: 80px;
  display: flex;
  flex: 1;
  background-color: ${colors.secondary};
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: ${tabletMax}px) {
    display: none;
  }
`;

export const Item = styled(Link)`
  display: flex;
  font-size: 20px;
  color: ${colors.fonts.white};
  font-weight: bolder;
  justify-content: center;
  align-items: center;
  margin: 8px;
  text-decoration: none;
`;

export const ButtonSair = styled.button`
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
    background-color: "#41ACC8";
    border: none;
  }
`;
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
    background-color: "#41ACC8";
  }
`;

//

export const CustomBurger = styled(Burger)`
  @media (max-width: 767px) {
    display: none;
  }
`;

// export const MenuButton = styled.img`

//   justify-content: start;
//   /* align-items: center; */
//   width: 250px;
//   margin-right: 80px;
// `;

// export const MenuButton = styled.img.attrs({ src: brand })`
//   width: 188px;
//   height: 50px;
//   @media (max-width: ${tabletMax}px) {
//     display: none;
//   }
// `;
