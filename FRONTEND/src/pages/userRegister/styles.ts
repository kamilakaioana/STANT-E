import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/image/logo.svg";
import stante from "../../assets/image/stante.svg";
import CustomInput from "../../components/inputs/input";
import { colors } from "../../styles/colors";
import { MediaWidth } from "../../utils/constants";
import { StringsResources } from "../../utils/stringsResources";

const { mobileMax, tabletMax, screenSmallMax } = MediaWidth;
const { FULL_NAME, EMAIL, MIN_CHARACTERS, PASSWORD } =
  StringsResources.PLACEHOLDERS;

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: lighter;
  font-size: 40px;
  color: ${colors.fonts.light};

  @media (max-width: ${screenSmallMax}px) {
    font-size: 32px;
  }
  @media (max-width: ${mobileMax}px) {
    font-size: 24px;
  }
`;

export const FormContainer = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15%;
  padding-right: 15%;
  padding-bottom: 16px;

  @media (max-width: ${mobileMax}px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const NomeInput = styled(CustomInput).attrs({
  height: 60,
  fontSize: 22,
  placeholder: FULL_NAME,
  name: "name",
})`
  box-shadow: 2px 2px 2px 1px ${colors.boxShadown};
`;

export const EmailInput = styled(CustomInput).attrs({
  height: 60,
  type: "email",
  fontSize: 22,
  placeholder: EMAIL,
  name: "email",
})`
  align-self: stretch;
  margin-top: 32px;
`;

export const PasswordInput = styled(CustomInput).attrs({
  height: 60,
  type: "password",
  fontSize: 22,
  placeholder: MIN_CHARACTERS,
  name: "password",
})`
  margin-top: 32px;
`;

export const ConfirmPasswordInput = styled(CustomInput).attrs({
  height: 60,
  type: "password",
  fontSize: 22,
  placeholder: PASSWORD,
  name: "confirmPassword",
})`
  margin-top: 32px;
`;

export const ButtonContainer = styled.div``;

export const LinkContainer = styled.div`
  align-content: center;
  justify-content: center;
  margin-top: 16px;
`;

export const LinkRegister = styled(Link).attrs({
  to: "/login",
})`
  color: black;
  font-size: 18px;
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
