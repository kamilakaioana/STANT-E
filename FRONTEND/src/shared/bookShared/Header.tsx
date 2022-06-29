import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../components/inputs/searchInput";
import PlusButton from "../../components/PlusButton";
import SearchAdvanced from "../../components/seachAdvanced";
import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";
import { cutStringByCharacterLimit, greetingMessage } from "../../utils";
import { StringsResources } from "../../utils/stringsResources";
import {
  GreetingMessageText,
  ShowMoreButton,
  ContainerSearch,
  ShowMoreButtonContainer,
  MessageContainer,
  AdvancedContainer,
} from "./styles";

interface IBookShared {
  onSubmit: () => void;
}
const Header: React.FC<IBookShared> = ({ onSubmit }) => {
  const [showMoreFilter, setShowMoreFilter] = useState<boolean>(true);
  const { searchData, setSearchData } = useSearch();
  const { user } = useAuth();
  const navigate = useNavigate();

  const greetings: string = useMemo(() => {
    return `${greetingMessage()}, ${cutStringByCharacterLimit(user.name, 6)}!`;
  }, [user.name]);

  return (
    <div>
      <MessageContainer>
        <GreetingMessageText>{greetings}</GreetingMessageText>
        <PlusButton onClick={() => navigate("/livro")} />
      </MessageContainer>
      {showMoreFilter ? (
        <AdvancedContainer>
          <SearchAdvanced
            setShowMoreFilter={setShowMoreFilter}
            onSubmit={onSubmit}
          />
        </AdvancedContainer>
      ) : (
        <ContainerSearch>
          <SearchInput
            placeholder={StringsResources.PLACEHOLDERS.BOOK_TITLE}
            value={searchData.title ?? ""}
            onChange={(e) => {
              setSearchData({ title: e.target.value });
            }}
            showButton
            onSubmit={onSubmit}
          />

          <ShowMoreButtonContainer>
            <ShowMoreButton onClick={() => setShowMoreFilter(true)}>
              {StringsResources.BUTTONS.SHOW_FILTERS}
            </ShowMoreButton>
          </ShowMoreButtonContainer>
        </ContainerSearch>
      )}
    </div>
  );
};

export default Header;
