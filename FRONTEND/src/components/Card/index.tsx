import React from "react";
import { HeartIconGray, HeartIconRed } from "../../pages/bookRegister/styles";
import DefaultBook from "../../assets/image/defaultBook.svg";
import {
  Book,
  BookImage,
  Content,
  Description,
  HeaderBook,
  ImageContainer,
  Title,
} from "./styles";
interface ICardProps {
  title: string;
  favoritos: boolean;
  image: string;
  description: string;
  onPressFavorite: (e: string) => void;
  onPressBook: (e: string) => void;
  bookId: string;
}

const Card: React.FC<ICardProps> = ({
  title,
  image,
  description,
  onPressFavorite,
  onPressBook,
  bookId,
  favoritos,
}) => {
  return (
    <Book key={bookId}>
      <HeaderBook>
        <Title>{title}</Title>
        {favoritos ? (
          <HeartIconRed onClick={() => onPressFavorite(bookId)} />
        ) : (
          <HeartIconGray onClick={() => onPressFavorite(bookId)} />
        )}
      </HeaderBook>
      <ImageContainer onClick={() => onPressBook(bookId)}>
        <BookImage src={image && image !== "" ? image : DefaultBook} />
      </ImageContainer>
      {/* // @TODO CORRIGIR ELLIPSIS */}
      <Content>
        <Description>
          {description?.length
            ? description
            : "Não há uma descrição cadastrada"}
        </Description>
      </Content>
    </Book>
  );
};

export default Card;
