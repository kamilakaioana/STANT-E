import { useCallback, useEffect, useState } from "react";
import { IBook } from "../../interfaces";
import BookService from "../../services/bookService";
import BookShared from "../../shared/bookShared";

function Home() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadBooks = useCallback(async () => {
    setLoading(true);
    const book: IBook[] = await BookService.getAll();

    book && book.length && setBooks(book);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  return <BookShared data={books} loading={loading} />;
}

export default Home;
