import styled from "styled-components";
import HeartRedIcon from "../../assets/icon/heartRed.svg";
import { colors } from "../../styles/colors";

type imageSrc = {
  src: string;
};

export const Book = styled.div`
  background-color: ${colors.backgroundLight};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 100ms ease-in-out;
  border-radius: 20px;
  :hover {
    transform: scale(1.05);
  }
  cursor: pointer;
  overflow: hidden;
  border: 4px solid ${colors.lightGreen};
`;

export const HeaderBook = styled.div`
  background-color: ${colors.lightGreen};
  height: 32px;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HeartIconRed = styled.img.attrs({ src: HeartRedIcon })`
  height: 24px;
  width: 24px;
  margin-right: 8px;
  align-self: center;
`;

export const ImageContainer = styled.div`
  background-color: ${colors.backgroundGreenLight};
  height: 230px;
  width: 100%;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 6px 12px 12px 12px;
  height: 28px;
`;

export const BookImage = styled.img.attrs({
  alt: "visualização da imagem do livro",
})<imageSrc>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Description = styled.p`
  font-size: 16px;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
