import styled from "styled-components";
import logo from "../../assets/image/logo.svg";
import stante from "../../assets/image/stante.svg";
import organizedBooksImg from "../../assets/image/organizedBooks.svg";
import { Link } from "react-router-dom";
import CustomInput from "../../components/inputs/input";
import { colors } from "../../styles/colors";
import { MediaWidth } from "../../utils/constants";

const {
  mobileMax,
  tabletMax,
  screenSmallMax,
  screenMediumMax,
  screenLargeMin,
} = MediaWidth;

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  background-color: ${colors.lightGreen};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${tabletMax}px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img.attrs({ src: logo })`
  width: 135px;
  height: 135px;

  @media (max-width: ${screenSmallMax}px) {
    width: 120px;
    height: 120px;
  }
`;

export const Brand = styled.img.attrs({ src: stante })`
  width: 251px;
  height: 71px;
  margin-top: 24px;

  @media (max-width: ${screenSmallMax}px) {
    width: 234px;
    height: 67px;
  }
`;

export const OrganizedBooksImg = styled.img.attrs({ src: organizedBooksImg })`
  width: 205px;
  height: 165px;
  margin-bottom: 32px;

  @media (min-width: ${screenLargeMin}px) {
    width: 224px;
    height: 180px;
  }
  @media (max-width: ${screenMediumMax}px) {
    width: 205px;
    height: 165px;
  }

  @media (max-width: ${screenSmallMax}px) {
    width: 180px;
    height: 145px;
  }

  @media (max-width: ${tabletMax}px) {
    width: 147px;
    height: 122px;
  }

  @media (max-width: ${mobileMax}px) {
    width: 147px;
    height: 122px;
  }
`;

export const FormContainer = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 16px;

  @media (max-width: ${tabletMax}px) {
    padding-left: 20%;
    padding-right: 20%;
  }

  @media (max-width: ${mobileMax}px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const EmailInput = styled(CustomInput).attrs({
  height: 60,
  type: "email",
  fontSize: 22,
  placeholder: "Email",
  name: "email",
})`
  box-shadow: 2px 2px 2px 1px ${colors.boxShadown};
`;

export const PasswordInput = styled(CustomInput).attrs({
  height: 60,
  type: "password",
  fontSize: 22,
  placeholder: "Senha",
  name: "password",
})`
  margin-top: 32px;
  box-shadow: 2px 2px 2px 1px ${colors.boxShadown};
`;

export const LinkContainer = styled.div`
  align-content: center;
  justify-content: center;
  margin-top: 24px;
`;

export const LinkRegister = styled(Link).attrs({
  to: "/register",
})`
  color: black;
  font-size: 18px;
`;

export const ButtonContainer = styled.div`
  padding-left: 20%;
  padding-right: 20%;

  @media (max-width: ${mobileMax}px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
