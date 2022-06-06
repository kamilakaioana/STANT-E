import Input from "../../components/inputs/input/index";
import styled from "styled-components";
import CustomButton from "../../components/button";
import ImageIcon from "../../assets/icon/image.svg";
import HeartRedIcon from "../../assets/icon/heartRed.svg";
import HeartGrayIcon from "../../assets/icon/heartGray.svg";
import EditFormIcon from "../../assets/icon/edit.svg";
import CheckedIcon from "../../assets/icon/checked.svg";
import UncheckedIcon from "../../assets/icon/unchecked.svg";

type IcolorSelected = {
  selected?: boolean;
};

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 40px 120px;
  flex: 3;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  padding: 40px 120px;
  flex-direction: column;
  display: flex;
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
`;

export const CancelarEdicao = styled.p`
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  color: #797878;
  text-decoration: underline;
  font-size: 24px;
  cursor: pointer;
`;

export const AddImageContainer = styled.div`
  flex: 1;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

export const TitleInput = styled(Input).attrs({
  name: "title",
  height: 80,
  fontSize: 24,
  placeholder: "Titulo do livro",
})`
  font-family: Arial, Helvetica, sans-serif;
`;

export const AuthorInput = styled(Input).attrs({
  name: "author",
  height: 80,
  fontSize: 24,
  placeholder: "Autor",
})`
  margin-top: 32px;
  font-family: Arial, Helvetica, sans-serif;
`;
// export const DescriptionInput = styled(Input).attrs({
//   name: "description",
//   height: 80,
//   fontSize: 24,
//   placeholder: "Descrição",
//   // type: "textarea",
// })`
//   margin-top: 32px;
//   font-family: Arial, Helvetica, sans-serif;
// `;
export const ExcluirButton = styled(CustomButton).attrs({
  height: 80,
})`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const SalveButton = styled(CustomButton).attrs({
  height: 80,
})`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

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
  margin-right: 30px;
  flex-direction: row;
  display: flex;
  width: 100%;
`;

export const ButtonSalveContainer = styled.div`
  margin-left: 30px;
  width: 100%;
  flex-direction: row;
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
  font-size: 24px;
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
  :hover {
    opacity: 0.8;
  }
`;
