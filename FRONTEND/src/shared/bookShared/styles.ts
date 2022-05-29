import styled from "styled-components";
import CustomInput from "../../components/inputs/input";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f2f8f7;
  padding: 44px;
`;

export const SearchInput = styled(CustomInput).attrs({
  height: 64,
  fontSize: 24,
  placeholder: "Titulo do livro",
  name: "name",
})`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const Box = styled.div`
  border: 1px solid #444;
  border-radius: 20px;
`;

export const BoxButton = styled.button`
  background: #164c64;
  color: #fff;
  font-weight: bold;
  border: none;
  float: right;
  height: 64px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
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
