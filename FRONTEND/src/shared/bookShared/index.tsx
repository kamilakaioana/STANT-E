import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Listing from "../../components/listing";
import LoadingModal from "../../components/modais/Loading";
import SearchAdvanced from "../../components/seachAdvanced";
import { useAuth } from "../../hooks/auth";
import { IBook } from "../../interfaces";
import { Container, ShowMoreButton } from "./styles";
import SearchInput from "../../components/inputs/searchInput";
import Header from "./Header";

interface IBookShared {
  data: IBook[];
  loading: boolean;
}
const BookShared: React.FC<IBookShared> = ({ data, loading }) => {
  const [books, setBooks] = useState<IBook[]>([]);
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [favoritos, setFavoritos] = useState<boolean>(true);

  return (
    <>
      <Container>
        <Header />
        <Listing data={data} />
      </Container>
      <LoadingModal modalVisible={loading} />
    </>
  );
};

BookShared.defaultProps = {
  loading: false,
};

export default BookShared;
