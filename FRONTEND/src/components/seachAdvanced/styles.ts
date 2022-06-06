import styled from "styled-components";
import { colors } from "../../styles/colors";
import CustomInput from "../inputs/input";

export const Container = styled.div`
  margin-top: 24;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
`;

export const SearchInputTitle = styled(CustomInput).attrs({
  height: 64,
  fontSize: 24,
  placeholder: "Titulo do livro",
  name: "name",
})`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const SearchInputAuthor = styled(CustomInput).attrs({
  height: 64,
  fontSize: 24,
  placeholder: "Autor",
  name: "name",
})`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const Button = styled.button`
  height: 66px;
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
