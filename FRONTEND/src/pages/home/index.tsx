import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/styles";
import { useAuth } from "../../hooks/auth";
import { IBook } from "../../interfaces";
import BookService from "../../services/bookService";

import { BookImage, Container, Livro, Livros, Content } from "./styles";

function Home() {
  const [books, setBooks] = useState<IBook[]>()
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await signOut();
    navigate("/login"); // check again
  }
  const loadBooks = async () => {
    const book: IBook[] = await BookService.getAll();
    console.log(book)
    setBooks(book ? book : [])
    return book;
  }

  const handleSelectBook =  (id: string) => {
   
    navigate(`/livro/${id} `); // check again
  }
 
  // componentDiMount() {
  //   getBooks();
  // }
  useEffect(() => {
    const teste = loadBooks();
    console.log("teste", teste)
  }, [])
  return (
    <Container >
      <Livros>
        {
          books?.map(book => (
            <Livro key={book._id} onClick={() => handleSelectBook(book._id)}>
              <BookImage />
              <Content>
              <h2>{book.titulo}</h2>
              <p>{book.descricao ?? ' Ainda não há descrição para essa obra'}</p>
              </Content>
             
            </Livro>
          ))
        }
      </Livros>
    </Container>


  )
}

export default Home;

function componentDiMount() {
  throw new Error("Function not implemented.");
}

