import styled from "styled-components";
import CustomInput from "../../components/inputs/input";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  background-color: #f2f8f7;
  padding: 24px;
`;

export const SearchInput = styled(CustomInput).attrs({
  fontSize: 24,
  placeholder: "Titulo do livro",
  name: "name",
})`
  box-shadow: 2px 2px 2px 1px ${colors.boxShadown};
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const Box = styled.div`
  border: 1px solid #444;
  border-radius: 20px;
`;

export const BoxButton = styled.button`
  background: ${colors.primary};
  color: ${colors.fonts.white};
  font-weight: bold;
  border: none;
  float: right;
  height: 64px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
