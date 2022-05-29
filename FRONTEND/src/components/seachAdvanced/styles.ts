import styled from "styled-components";
import CustomInput from "../inputs/input";

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
