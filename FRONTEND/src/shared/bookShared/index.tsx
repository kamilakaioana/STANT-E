import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../../components/icons";
import Listing from "../../components/listing";
import LoadingModal from "../../components/modais/Loading";
import SearchAdvanced from "../../components/seachAdvanced";
import { useAuth } from "../../hooks/auth";
import { IBook } from "../../interfaces";
import { Container, SearchInput } from "./styles";

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

          {/* <SearchInput value={searchInput} onChange={(e) => setSearchInput(e.target.value)} /> */}
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
            <div style={{ display: "flex", flexDirection: "row" }}>
              <SearchInput
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                style={{
                  height: 66,
                  border: "none",
                  boxShadow: "2px 2px 2px 1px rgb(0 0 0 / 20%)",
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  backgroundColor: "#22c322cc",
                }}
              >
                <img src={SearchIcon} alt="search" />
              </button>
            </div>

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
