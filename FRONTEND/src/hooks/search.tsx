import { createContext, ReactNode, useState, useContext } from "react";

export type ISearchData = {
  title?: string;
  author?: string;
};

export const initialValues: ISearchData = {
  title: undefined,
  author: undefined,
};

type SearchProviderProps = {
  children: ReactNode;
};

const initialFunction: React.Dispatch<
  React.SetStateAction<ISearchData>
> = () => {};

const SearchContext = createContext({
  searchData: initialValues,
  setSearchData: initialFunction,
  clearSearchData: () => {},
});

export default function SearchProvider({ children }: SearchProviderProps) {
  const [searchData, setSearchData] = useState<ISearchData>({} as ISearchData);
  console.log("o stado global é", searchData);
  const clearSearchData = () => {
    setSearchData(initialValues);
  };

  return (
    <SearchContext.Provider
      value={{ searchData, setSearchData, clearSearchData }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
