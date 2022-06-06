import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Listing from "../../components/listing";
import LoadingModal from "../../components/modais/Loading";
import { useAuth } from "../../hooks/auth";
import { IBook, IResponse } from "../../interfaces";
import { Container, ShowMoreButton } from "./styles";
import Header from "./Header";
import BookService from "../../services/bookService";
import { useToast } from "../../hooks/toast";

interface IBookShared {
  data: IBook[];
  loading: boolean;
}
const BookShared: React.FC<IBookShared> = ({ data, loading }) => {
  const navigate = useNavigate();
  const [favoritos, setFavoritos] = useState<boolean>(true);
  const { showToast } = useToast();

  const handleSelectedBook = (bookId: string) => {
    navigate(`/livro/${bookId} `);
  };

  const handleFavoriteBook = async (bookId: string) => {
    const res = await BookService.UpdateFavoriteBookbyId(bookId);

    res.success === true
      ? showToast(
          "success",
          "Livro favoritado",
          "O livro selecionado foi adicionado aos favoritos."
        )
      : showToast(
          "danger",
          "Erro ao favoritar o livro",
          "Não foi possivel adicionar o livro aos favoritos, por favor tente novamente mais tarde."
        );
  };
  return (
    <>
      <Container>
        <Header />
        <Listing
          data={data}
          handleSelectBook={handleSelectedBook}
          favoriteOnPress={handleFavoriteBook}
        />
      </Container>
      <LoadingModal modalVisible={loading} />
    </>
  );
};

export default BookShared;
