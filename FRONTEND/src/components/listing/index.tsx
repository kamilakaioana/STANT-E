import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultBook from "../../assets/image/defaultBook.svg";
import NotFound from "../../assets/image/resultsNotFound.svg";
import { useAuth } from "../../hooks/auth";
import { IBook } from "../../interfaces";
import { HeartIconGray } from "../../pages/bookRegister/styles";
import {
  Book,
  BookImage,
  Books,
  Container,
  ContainerNotFound,
  Content,
  Description,
  HeaderBook,
  HeartIconRed,
  ImageContainer,
  InfoMessage,
  Title,
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
        <Container>
          <Books>
            {data?.map((book) => (
              <Book key={book._id} onClick={() => handleSelectBook(book._id)}>
                <HeaderBook>
                  <Title>{book.title}</Title>
                  {favoritos ? (
                    <HeartIconRed />
                  ) : (
                    <HeartIconGray selected={favoritos} />
                  )}
                </HeaderBook>
                <ImageContainer>
                  <BookImage
                    src={
                      book?.image && book.image !== ""
                        ? book.image
                        : DefaultBook
                    }
                  />
                </ImageContainer>
                {/* // @TODO CORRIGIR ELLIPSIS */}
                <Content>
                  <Description>{book.description}</Description>
                </Content>
              </Book>
            ))}
          </Books>
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
          <ContainerNotFound>
            <InfoMessage>
              <br />
              <b>
                Nenhum resultado <br /> encontrado para essa busca.
              </b>
              <br /> Você pode usar o<br /> cadastrar.
            </InfoMessage>
            <img
              src={NotFound}
              height={200}
              width={200}
              alt="Um desenho de um menino em pé segurando um livro"
              style={{ marginLeft: 40 }}
            />
          </ContainerNotFound>
        </Container>
      )}
    </>
  );
};

export default Listing;
