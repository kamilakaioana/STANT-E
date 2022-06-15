import Input from "../../components/inputs/input/index";
import styled from "styled-components";
import CustomButton from "../../components/button";
import ImageIcon from "../../assets/icon/image.svg";
import HeartRedIcon from "../../assets/icon/heartRed.svg";
import HeartGrayIcon from "../../assets/icon/heartGray.svg";
import EditFormIcon from "../../assets/icon/edit.svg";
import CheckedIcon from "../../assets/icon/checked.svg";
import UncheckedIcon from "../../assets/icon/unchecked.svg";
import { colors } from "../../styles/colors";
import { MediaWidth } from "../../utils/constants";

type IcolorSelected = {
  selected?: boolean;
};
const { mobileMax, tabletMax, screenSmallMax, screenMediumMax } = MediaWidth;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  @media (max-width: ${tabletMax}px) {
    padding-left: 0%;
    padding-top: 24px;
  }
  flex: 3;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  padding: 5px 120px;
  flex-direction: column;
  display: flex;
  @media (max-width: ${screenMediumMax}px) {
    padding: 5px 100px;
  }
  @media (max-width: ${screenSmallMax}px) {
    padding: 5px 65px;
  }
  @media (max-width: ${tabletMax}px) {
    padding-left: 0%;
    padding-left: 48px;
    padding-right: 48px;
  }
  @media (max-width: ${mobileMax}px) {
    padding-left: 0%;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Options = styled.div`
  justify-content: space-between;
  flex-direction: row;
  display: flex;
`;

export const Remover = styled.p<IcolorSelected>`
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  color: #${({ selected }) => (selected ? "FF1D1D" : "666666")};
  font-weight: bold;
  font-size: 20px;
  :hover {
    opacity: 0.8;
  }
  @media (max-width: ${tabletMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${mobileMax}px) {
    font-size: 14px;
  }
`;

export const CancelarEdicao = styled.p`
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  color: #797878;
  text-decoration: underline;
  font-size: 20px;
  cursor: pointer;

  @media (max-width: ${tabletMax}px) {
    font-size: 16px;
  }
`;

export const TitleInput = styled(Input).attrs({
  name: "title",
  height: 60,
  fontSize: 24,
  placeholder: "Titulo do livro",
})`
  font-family: Arial, Helvetica, sans-serif;
`;

export const AuthorInput = styled(Input).attrs({
  name: "author",
  height: 60,
  fontSize: 24,
  placeholder: "Autor",
})`
  margin-top: 32px;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: ${tabletMax}px) {
    margin-top: 0px;
  }
`;

export const ExcluirButton = styled(CustomButton).attrs({
  height: 60,
})``;

export const SalveButton = styled(CustomButton).attrs({
  height: 60,
})``;

export const Title = styled.h1`
  font-weight: lighter;
  font-size: 32px;
  color: #3f3b3b;
`;

export const TitleContainer = styled.div`
  flex-direction: row;
  display: flex;
`;

export const Content = styled.div`
  flex-direction: row;
  display: flex;

  @media (max-width: ${tabletMax}px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img.attrs({ src: ImageIcon })`
  width: 210px;
  height: 210px;
  align-self: center;
`;

export const ImgContent = styled.div`
  background-color: #f5f2f2;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 8px;
`;

export const ButtonExcluirContainer = styled.div`
  margin-right: 40px;
  flex-direction: row;
  display: flex;
  width: 100%;
  @media (max-width: ${screenSmallMax}px) {
    margin-right: 20px;
  }

  @media (max-width: ${tabletMax}px) {
    margin-right: 15px;
  }
`;

export const ButtonSalveContainer = styled.div`
  margin-left: 40px;
  width: 100%;
  flex-direction: row;

  @media (max-width: ${screenSmallMax}px) {
    margin-left: 20px;
  }
  @media (max-width: ${tabletMax}px) {
    margin-left: 15px;
  }
`;

export const HeartIconRed = styled.img.attrs({
  src: HeartRedIcon,
})<IcolorSelected>`
  height: 24px;
  width: 24px;
  margin-right: 8px;
  align-self: center;
`;

export const HeartIconGray = styled.img.attrs({
  src: HeartGrayIcon,
})<IcolorSelected>`
  height: 24px;
  width: 24px;
  margin-right: 8px;
  align-self: center;
`;

export const RemoverContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

export const CancelarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const EditIcon = styled.img.attrs({ src: EditFormIcon })`
  height: 24px;
  width: 24px;
  margin-right: 8px;
`;

export const LivrosLidos = styled.p`
  align-content: flex-end;
  align-self: flex-end;
  color: #30322e;
  font-weight: bold;
  font-size: 20px;
  @media (max-width: ${tabletMax}px) {
    font-size: 16px;
  }
`;

export const CheckedIconLidos = styled.img.attrs({ src: CheckedIcon })`
  height: 50px;
  width: 50px;
`;

export const UncheckedIconLidos = styled.img.attrs({ src: UncheckedIcon })`
  height: 50px;
  width: 50px;
`;

export const LivrosLidosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const LivrosLidosContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Img = styled.img.attrs({ alt: "imagem livro" })`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AddImageContainer = styled.div`
  flex: 1;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

export const ImgContainer = styled.div`
  border: 4px solid ${colors.lightGreen};
  height: 300px;
  border-radius: 8px;
  width: 100%;
  @media (max-width: ${tabletMax}px) {
    height: 300px;
  }
  @media (max-width: ${mobileMax}px) {
    height: 250px;
  }
`;
