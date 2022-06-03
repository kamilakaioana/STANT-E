import styled from "styled-components";
import HeartRedIcon from "../../assets/icon/heartRed.svg";

type imageSrc = {
  src: string;
};

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
  background-color: #7bbbad;
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
  background-color: #aacfc7;
  height: 300;
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
  height: 300px;
  object-fit: contain;
`;

export const Description = styled.p`
  padding: 0;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
