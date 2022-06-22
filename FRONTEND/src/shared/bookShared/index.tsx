import React from "react";
import { useNavigate } from "react-router-dom";
import Listing from "../../components/listing";
import LoadingModal from "../../components/modais/Loading";
import { useToast } from "../../hooks/toast";
import { IBook } from "../../interfaces";
import BookService from "../../services/bookService";
import Header from "./Header";
import { Container } from "./styles";

interface IBookShared {
  data: IBook[];
  loading: boolean;
  onSubmit: () => {};
  setUpdate?: React.Dispatch<React.SetStateAction<number>>;
}
const BookShared: React.FC<IBookShared> = ({
  data,
  loading,
  onSubmit,
  setUpdate,
}) => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleSelectedBook = (bookId: string) => {
    navigate(`/livro/${bookId} `);
  };

  const handleFavoriteBook = async (bookId: string) => {
    const res = await BookService.UpdateFavoriteBookbyId(bookId);
    if (res.success) setUpdate?.((current) => current + 1);
    if (res.success === false) {
      showToast("danger", "Ocorreu um erro ao realizar a ação", res.msg);
    }
    if (res.success === true && res.action === "ADD") {
      showToast("success", "Livro favoritado", res.msg);
    }
    if (res.success === true && res.action === "REMOVE") {
      showToast("info", "O livro retirado dos favoritos", res.msg);
    }
  };

  return (
    <>
      <Container>
        <Header onSubmit={onSubmit} />
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
