import styled from "styled-components";
import { colors } from "../../styles/colors";
import { MediaWidth } from "../../utils/constants";
import CustomInput from "../inputs/input";

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

export const SearchInputTitle = styled(CustomInput).attrs({
  fontSize: 24,
  placeholder: "Titulo do livro",
  name: "name",
})`
  box-shadow: 2px 2px 2px 1px ${colors.boxShadown};
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const SearchInputAuthor = styled(CustomInput).attrs({
  fontSize: 24,
  placeholder: "Autor",
  name: "name",
})`
  box-shadow: 2px 2px 2px 1px ${colors.boxShadown};
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const Button = styled.button`
  height: 60px;
  width: 232px;
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
  @media (max-width: ${screenSmallMax}px) {
    height: 56px;
    width: 232px;
  }
  @media (max-width: ${tabletMax}px) {
    height: 48px;
    width: 200px;
    border-radius: 15px;
  }
  @media (max-width: ${mobileMax}px) {
    height: 40px;
    width: 180px;
    border-radius: 10px;
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
