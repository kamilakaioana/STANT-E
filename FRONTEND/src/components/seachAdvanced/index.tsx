import React from "react";
import Reading from "../../assets/image/reading.svg";
import { useSearch } from "../../hooks/search";
import { SearchIcon } from "../icons";
import SearchInput from "../inputs/searchInput";
import { Button, Container, ShowMoreButton } from "./styles";

interface ISearchAdvanced {
  setShowMoreFilter: (value: boolean) => void;
  onSubmit: () => void;
}
const SearchAdvanced: React.FC<ISearchAdvanced> = ({
  setShowMoreFilter,
  onSubmit,
}) => {
  const { searchData, setSearchData } = useSearch();

  const handleShowLess = () => {
    setShowMoreFilter(false);
  };
  const teste = (text: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData({ ...searchData, title: text.target.value });
  };
  return (
    <Container>
      <div style={{ width: "50%" }}>
        <SearchInput
          placeholder="Titulo livro"
          value={searchData.title ?? ""}
          onChange={(e) => teste(e)}
        />
        <div style={{ paddingTop: 16 }}>
          <SearchInput
            placeholder="Autor"
            value={searchData.author ?? ""}
            onChange={(e) =>
              setSearchData({ ...searchData, author: e.target.value })
            }
          />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <ShowMoreButton onClick={() => handleShowLess()}>
            Esconder filtros
          </ShowMoreButton>
        </div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Button onClick={onSubmit}>
            PESQUISAR
            <img
              src={SearchIcon}
              alt="search"
              height={24}
              width={24}
              style={{
                marginLeft: 12,
              }}
            />
          </Button>
        </div>
      </div>

      <img src={Reading} alt="reading" height={183} width={294} />
    </Container>
  );
};

export default SearchAdvanced;
