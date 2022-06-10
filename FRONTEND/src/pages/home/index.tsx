import { useCallback, useEffect, useState } from "react";
import { useSearch } from "../../hooks/search";
import { IBook } from "../../interfaces";
import BookService from "../../services/bookService";
import BookShared from "../../shared/bookShared";
import { filterBooks } from "../../utils";

function Home() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [update, setUpdate] = useState<number>(0);
  const { searchData } = useSearch();

  const loadBooks = useCallback(async () => {
    setLoading(true);
    const book: IBook[] = await BookService.getByLoggedUser();
    let resBooks: IBook[] = book;

    if (searchData.author || searchData.title) {
      resBooks = filterBooks(book, searchData);
    }
    setBooks(resBooks);

    setLoading(false);
  }, [searchData]);

  useEffect(() => {
    loadBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  return (
    <BookShared
      data={books}
      loading={loading}
      onSubmit={() => loadBooks()}
      setUpdate={setUpdate}
    />
  );
}

export default Home;
