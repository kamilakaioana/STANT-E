import styled from "styled-components";
import { colors } from "../../styles/colors";
import { MediaWidth } from "../../utils/constants";
import { SearchIcon } from "../icons";

const { mobileMax, tabletMax, screenSmallMax } = MediaWidth;

export const Container = styled.div`
  margin-top: 24;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
  @media (max-width: ${tabletMax}px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 50%;
  @media (max-width: ${tabletMax}px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  margin-top: 8px;
  height: 50px;
  width: 220px;
  border: none;
  border-radius: 20px;
  background-color: ${colors.primary};
  color: ${colors.fonts.white};
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: ${colors.secondary};
    transform: scale(1.05);
  }
  @media (max-width: ${screenSmallMax}px) {
    height: 45px;
    width: 210px;
    font-size: 16px;
  }
  @media (max-width: ${tabletMax}px) {
    height: 40px;
    width: 200px;
    border-radius: 15px;
    font-size: 14px;
  }
  @media (max-width: ${mobileMax}px) {
    height: 35px;
    width: 180px;
    border-radius: 10px;
    font-size: 12px;
  }
`;

export const ShowMoreButton = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  margin-top: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const ReadingImg = styled.img`
  height: 183px;
  width: 294px;
  @media (max-width: ${tabletMax}px) {
    display: none;
  }
`;

export const ContainerButton = styled.div`
  justify-content: center;
  display: flex;
`;

export const ShowMoreContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ContainerInput = styled.div`
  padding-top: 16px;
`;

export const Icon = styled.img.attrs({
  src: SearchIcon,
  alt: "Icone de uma lupa indicando pesquisa",
})`
  width: 24px;
  height: 24px;
  margin-left: 12px;
`;
