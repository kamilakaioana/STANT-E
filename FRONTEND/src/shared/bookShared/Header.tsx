import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../components/inputs/searchInput";
import PlusButton from "../../components/PlusButton";
import SearchAdvanced from "../../components/seachAdvanced";
import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";
import { cutStringByCharacterLimit, greetingMessage } from "../../utils";
import { GreetingMessageText, ShowMoreButton, ContainerSearch } from "./styles";

interface IBookShared {
  onSubmit: () => void;
}
const Header: React.FC<IBookShared> = ({ onSubmit }) => {
  const [showMoreFilter, setShowMoreFilter] = useState<boolean>(false);
  const { searchData, setSearchData } = useSearch();
  const { user } = useAuth();
  const navigate = useNavigate();

  const greetings: string = useMemo(() => {
    return `${greetingMessage()}, ${cutStringByCharacterLimit(user.name, 6)}!`;
  }, [user.name]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "start",
          paddingBottom: 0,
          marginBottom: 0,
        }}
      >
        <GreetingMessageText>{greetings}</GreetingMessageText>
        <PlusButton onClick={() => navigate("/livro")} />
      </div>
      {showMoreFilter ? (
        <div style={{ marginBottom: 24 }}>
          <SearchAdvanced
            setShowMoreFilter={setShowMoreFilter}
            onSubmit={onSubmit}
          />
        </div>
      ) : (
        <ContainerSearch>
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
        </ContainerSearch>
      )}
    </div>
  );
};

export default Header;
