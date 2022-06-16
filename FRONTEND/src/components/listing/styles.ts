import styled from "styled-components";
import HeartRedIcon from "../../assets/icon/heartRed.svg";
import { colors } from "../../styles/colors";

type imageSrc = {
  src: string;
};

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${colors.backgroundWhite};
  padding: 30px;
  border-radius: 20px;
`;

export const Books = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
`;

export const Book = styled.div`
  background-color: #f2f8f7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 100ms ease-in-out;
  border-radius: 20px;
  :hover {
    transform: scale(1.05);
  }
  cursor: pointer;
  overflow: hidden;
`;

export const HeaderBook = styled.div`
  background-color: ${colors.lightGreen};
  height: 48px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const HeartIconRed = styled.img.attrs({ src: HeartRedIcon })`
  height: 24px;
  width: 24px;
  margin-right: 8px;
  align-self: center;
`;

export const ImageContainer = styled.div`
  background-color: #aacfc7;
  height: 300px;
  width: 100%;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 16px 16px;
  height: 50px;
`;

export const BookImage = styled.img.attrs({ alt: "imagem livro" })<imageSrc>`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Description = styled.p`
  padding: 0;
  margin: 0;
  text-overflow: ellipsis;
`;
export const InfoMessage = styled.p`
  padding: 0;
  margin: 0;
  font-size: 24px;
  font-family: "Times New Roman", Times, serif;
`;

export const ContainerNotFound = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  text-align: end;
  align-self: center;
  padding: 100px;
`;
