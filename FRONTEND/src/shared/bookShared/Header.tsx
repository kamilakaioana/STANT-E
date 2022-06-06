import React, { useState } from "react";
import SearchInput from "../../components/inputs/searchInput";
import SearchAdvanced from "../../components/seachAdvanced";
import { ShowMoreButton } from "./styles";

const Header: React.FC = () => {
  const [showMoreFilter, setShowMoreFilter] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearch = (value: string) => {
    console.log("a pesquisa", value);
  };
  return (
    <div>
      {showMoreFilter ? (
        <div style={{ marginBottom: 24 }}>
          <SearchAdvanced
            setShowMoreFilter={setShowMoreFilter}
            onSubmit={handleSearch}
          />
        </div>
      ) : (
        <div
          style={{
            paddingLeft: "25%",
            paddingRight: "25%",
            marginTop: 24,
            marginBottom: 52,
          }}
        >
          <SearchInput
            placeholder="Título livro"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              // passar prop voltando
            }}
            showButton
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <ShowMoreButton onClick={() => setShowMoreFilter(true)}>
              Busca Avançada
            </ShowMoreButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
