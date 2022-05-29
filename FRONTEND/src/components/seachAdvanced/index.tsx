import React, { useState } from "react";
import Reading from "../../assets/image/reading.svg";

import { SearchIcon } from "../icons";
import SearchInput from "../inputs/searchInput";
import {
  Button,
  Container,
  SearchInputAuthor,
  SearchInputTitle,
  ShowMoreButton,
} from "./styles";

interface ISearchAdvanced {
  setShowMoreFilter: (value: boolean) => void;
  onSubmit: (value: string) => void;
}
const SearchAdvanced: React.FC<ISearchAdvanced> = ({
  setShowMoreFilter,
  onSubmit,
}) => {
  const [value, setValue] = useState<string>("");

  const handleShowLess = () => {
    setShowMoreFilter(false);
  };
  return (
    <Container>
      <div style={{ width: "50%" }}>
        <SearchInput
          placeholder="Titulo livro"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div style={{ paddingTop: 16 }}>
          <SearchInput
            placeholder="Autor"
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
          <Button onClick={() => onSubmit(value)}>
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
