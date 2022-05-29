import { useCallback, useEffect, useState } from "react";
import { IBook } from "../../interfaces";
import BookService from "../../services/bookService";
import BookShared from "../../shared/bookShared";


function Read() {
  const [books, setBooks] = useState<IBook[]>([])
  const [loading, setLoading] = useState<boolean>(false);

  const loadBooks = useCallback(async () => {
    const book: IBook[] = await BookService.getAll();
    console.log(book)
    setBooks(book ? book : [])
    return book;
  }, []);

    useEffect(() => {
    const teste = loadBooks();
    console.log("teste", teste)
  }, [loadBooks])
  return (

    <BookShared data={books} loading={loading}/>

  )
}

export default Read;


