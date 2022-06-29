import React from "react";
import Reading from "../../assets/image/reading.svg";
import { useSearch } from "../../hooks/search";
import { StringsResources } from "../../utils/stringsResources";
import SearchInput from "../inputs/searchInput";
import {
  Button,
  Container,
  ShowMoreButton,
  ReadingImg,
  Content,
  Icon,
  ContainerButton,
  ShowMoreContainer,
  ContainerInput,
} from "./styles";

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
      <Content>
        <SearchInput
          placeholder={StringsResources.PLACEHOLDERS.BOOK_TITLE}
          value={searchData.title ?? ""}
          onChange={(e) => teste(e)}
          height={50}
        />
        <ContainerInput>
          <SearchInput
            placeholder={StringsResources.PLACEHOLDERS.AUTHOR}
            value={searchData.author ?? ""}
            onChange={(e) =>
              setSearchData({ ...searchData, author: e.target.value })
            }
            height={50}
          />
        </ContainerInput>
        <ShowMoreContainer>
          <ShowMoreButton onClick={() => handleShowLess()}>
            {StringsResources.BUTTONS.HIDE_FILTERS}
          </ShowMoreButton>
        </ShowMoreContainer>
        <ContainerButton>
          <Button onClick={onSubmit}>
            {StringsResources.BUTTONS.SEARCH}
            <Icon />
          </Button>
        </ContainerButton>
      </Content>

      <ReadingImg src={Reading} alt="reading" />
    </Container>
  );
};

export default SearchAdvanced;
