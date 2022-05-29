import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { IBook } from "../../interfaces";
import BookService from "../../services/bookService";
import BookShared from "../../shared/bookShared";

function Home() {
  const [books, setBooks] = useState<IBook[]>([]);
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelectBook = (id: string) => {
    navigate(`/livro/${id} `);
  };

  const loadBooks = async () => {
    setLoading(true);
    const book: IBook[] = await BookService.getAll();
    console.log(book);
    setBooks(book ? book : []);
    setLoading(false);
    return book;
  };

  useEffect(() => {
    const teste = loadBooks();
    console.log("teste", teste);
  }, []);

  return <BookShared data={books} loading={loading} />;
}

export default Home;
