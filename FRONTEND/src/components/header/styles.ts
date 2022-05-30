import { Link } from "react-router-dom";
import styled from "styled-components";
import brand from "../../assets/image/brand.svg";

export const Container = styled.div`
  height: 80px;
  background-color: #338499;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const LogoContainer = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin-right: 80px;
`;

export const Logo = styled.img.attrs({ src: brand })`
  width: 188px;
  height: 50px;
`;

export const MenuContainer = styled.div`
  height: 80px;
  display: flex;
  flex: 1;
  background-color: #338499;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const Item = styled(Link)`
  display: flex;
  font-size: 20px;
  color: #fff;
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
  color: #ffffff;
  font-weight: bolder;
  font-family: Times;
`;
