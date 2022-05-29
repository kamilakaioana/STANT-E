import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Listing from "../../components/listing";
import LoadingModal from "../../components/modais/Loading";
import SearchAdvanced from "../../components/seachAdvanced";
import { useAuth } from "../../hooks/auth";
import { IBook } from "../../interfaces";
import { Container } from "./styles";
import SearchInput from '../../components/inputs/searchInput';

interface IBookShared {
  data: IBook[];
  loading: boolean;
}
const BookShared: React.FC<IBookShared> = ({ data, loading }) => {
  const [books, setBooks] = useState<IBook[]>([]);
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [favoritos, setFavoritos] = useState<boolean>(true);
  const [showMoreFilter, setShowMoreFilter] = useState<boolean>(true);
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <>
      {!showMoreFilter ? (
        <Container>
          {/* <div style={{ paddingLeft: "25%", paddingRight: '25%', marginTop: 24}}> */}

          <SearchAdvanced />

          {/* <button onClick={() => setShowMoreFilter(false)} style={{padding: 0, margin: 0, display: "flex", justifyContent: 'flex-end', marginBottom: 24}}>Busca avançada</button> */}
          {/* </div> */}
          <Listing data={data} />
          <LoadingModal modalVisible={loading} />
        </Container>
      ) : (
        <Container>
          <div
            style={{ paddingLeft: "25%", paddingRight: "25%", marginTop: 24 }}
          >
                  <SearchInput
              placeholder="titulo"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
         

            <button
              onClick={() => setShowMoreFilter(false)}
              style={{
                padding: 0,
                margin: 0,
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 24,
              }}
            >
              Busca avançada
            </button>
          </div>
          <Listing data={data} />
          <LoadingModal modalVisible={loading} />
        </Container>
      )}
    </>
  );
};

BookShared.defaultProps = {
  loading: false,
};

export default BookShared;
