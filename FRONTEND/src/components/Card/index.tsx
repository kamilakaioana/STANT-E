import React from "react";
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
import { StringsResources } from "../../utils/stringsResources";
import HeartButton from "../HeartButton";

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
        <HeartButton
          favorite={favoritos}
          onClick={() => onPressFavorite(bookId)}
        />
      </HeaderBook>
      <ImageContainer onClick={() => onPressBook(bookId)}>
        <BookImage
          src={
            image && image !== ""
              ? `data:image/gif;base64,${image}`
              : DefaultBook
          }
        />
      </ImageContainer>

      <Content>
        <Description>
          {description?.length
            ? description
            : StringsResources.BOOK_CARD.NO_DESCRIPTION}
        </Description>
      </Content>
    </Book>
  );
};

export default Card;
