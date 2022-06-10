import React, { useState } from "react";
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
import { StringsResources } from "../../utils/stringsResources";

interface ICardProps {
  title: string;
  favoritos: boolean;
  image: string;
  description: string;
  onPressFavorite: (e: string) => Promise<boolean>;
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
  const [valuefavorite, setValueFavorite] = useState<boolean>(favoritos);

  const handlePress = async () => {
    const favoritado = await onPressFavorite(bookId);
    console.log("favoritado", favoritado);
    setValueFavorite(favoritado);
  };

  console.log("valuefavorite", valuefavorite);
  console.log("favoritos", favoritos);
  return (
    <Book key={bookId}>
      <HeaderBook>
        <Title>{title}</Title>
        <div onClick={() => onPressFavorite(bookId)}>
          {favoritos ? <HeartIconRed /> : <HeartIconGray />}
        </div>
      </HeaderBook>
      <ImageContainer onClick={() => handlePress()}>
        <BookImage src={image && image !== "" ? image : DefaultBook} />
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
