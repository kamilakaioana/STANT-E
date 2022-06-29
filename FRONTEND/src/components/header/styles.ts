import { Link } from "react-router-dom";
import styled from "styled-components";
import brand from "../../assets/image/brand.svg";
import { colors } from "../../styles/colors";
import { MediaWidth } from "../../utils/constants";
import Burger from "../Burguer";

const { tabletMax } = MediaWidth;
type ITabProps = {
  selectedTab: boolean;
};

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

export const CustomBurger = styled(Burger)`
  @media (max-width: 767px) {
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

export const Button = styled.button<ITabProps>`
  background-color: ${({ selectedTab }) =>
    selectedTab ? colors.primary : "transparent"};
  border: none;
  font-size: 18px;
  color: ${colors.fonts.white};
  font-weight: bolder;

  padding: 0px 24px;
  border-bottom: ${({ selectedTab }) =>
    selectedTab ? `3px solid ${colors.lightGreenHover}` : "none"};
  :hover {
    background-color: ${colors.primary};
    cursor: pointer;
  }
`;
