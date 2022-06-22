import styled from "styled-components";
import CustomInput from "../../components/inputs/input";
import { colors } from "../../styles/colors";
import { MediaWidth } from "../../utils/constants";

const { tabletMax, mobileMax, screenSmallMax } = MediaWidth;

export const Container = styled.div`
  background-color: #f2f8f7;
  padding: 5%;
  padding-top: 0px;
  padding-bottom: 32px;
`;

export const SearchInput = styled(CustomInput).attrs({
  fontSize: 24,
  placeholder: "Titulo do livro",
  name: "name",
})`
  box-shadow: 2px 2px 2px 1px ${colors.boxShadown};
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

export const ShowMoreButton = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  margin-top: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const GreetingMessageText = styled.p`
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
  color: ${colors.primary};

  @media (max-width: ${screenSmallMax}px) {
    font-size: 20px;
  }
  @media (max-width: ${tabletMax}px) {
    font-size: 18px;
  }
  @media (max-width: ${mobileMax}px) {
    font-size: 14px;
  }
`;
export const ContainerSearch = styled.p`
  padding-left: 25%;
  padding-right: 25%;
  margin-bottom: 40px;
  @media (max-width: ${screenSmallMax}px) {
    padding-left: 20%;
    padding-right: 20%;
    margin-bottom: 40px;
  }
  @media (max-width: ${tabletMax}px) {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 32px;
  }
  @media (max-width: ${mobileMax}px) {
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 24px;
  }
`;
