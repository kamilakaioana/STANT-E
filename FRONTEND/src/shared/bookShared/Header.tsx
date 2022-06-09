import React, { useState } from "react";
import SearchInput from "../../components/inputs/searchInput";
import SearchAdvanced from "../../components/seachAdvanced";
import { useSearch } from "../../hooks/search";
import { ShowMoreButton } from "./styles";

interface IBookShared {
  onSubmit: () => void;
}
const Header: React.FC<IBookShared> = ({ onSubmit }) => {
  const [showMoreFilter, setShowMoreFilter] = useState<boolean>(false);
  const { searchData, setSearchData } = useSearch();

  return (
    <div>
      {showMoreFilter ? (
        <div style={{ marginBottom: 24 }}>
          <SearchAdvanced
            setShowMoreFilter={setShowMoreFilter}
            onSubmit={onSubmit}
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
            value={searchData.title ?? ""}
            onChange={(e) => {
              setSearchData({ title: e.target.value });
            }}
            showButton
            onSubmit={onSubmit}
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
