import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultBook from "../../assets/image/defaultBook.svg";
import NotFound from "../../assets/image/resultsNotFound.svg";
import { useAuth } from "../../hooks/auth";
import { IBook } from "../../interfaces";
import { HeartIconGray } from "../../pages/bookRegister/styles";
import {
  BookImage,
  Container, Content,
  HeartIconRed, Livro,
  Livros
} from "./styles";

interface IBookListProps {
  data: IBook[];
}
const Listing: React.FC<IBookListProps> = ({ data }) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [favoritos, setFavoritos] = useState<boolean>(true);

  const handleSelectBook = (id: string) => {
    navigate(`/livro/${id} `);
  };

  return (
    <>
      {data && data.length ? (
        <Container style={{ marginLeft: 24, marginRight: 24 }}>
          <Livros>
            {data?.map((book) => (
              <Livro key={book._id} onClick={() => handleSelectBook(book._id)}>
                <div
                  style={{
                    backgroundColor: "#7BBBAD",
                    height: 48,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    alignSelf: "flex-start",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: 24,
                    paddingRight: 24,
                  }}
                >
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {book.title}
                  </p>
                  {favoritos ? (
                    <HeartIconRed />
                  ) : (
                    <HeartIconGray selected={favoritos} />
                  )}
                </div>
                <div
                  style={{
                    backgroundColor: "#AACFC7",
                    height: 300,
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <BookImage
                    src={
                      book?.image && book.image !== ""
                        ? book.image
                        : DefaultBook
                    }
                  />
                </div>
                <Content>
                  <p
                    style={{ padding: 0, margin: 0, textOverflow: "ellipsis" }}
                  >
                    {book.description}
                  </p>
                </Content>
              </Livro>
            ))}
          </Livros>
        </Container>
      ) : (
        <Container
          style={{
            marginLeft: 24,
            marginRight: 24,
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
              textAlign: "end",
              alignSelf: "center",
              padding: 100,
            }}
          >
            <text fontSize={32}>
              <br />
              <b>
                Nenhum resultado <br /> encontrado para essa busca.
              </b>
              <br />
              Você pode usar o<br /> cadatrar.
            </text>
            <img
              src={NotFound}
              height={181}
              width={181}
              alt="Um desenho de um menino em pé segurando um livro"
              style={{ marginLeft: 40 }}
            />
          </div>
        </Container>
      )}
    </>
  );
};

export default Listing;
