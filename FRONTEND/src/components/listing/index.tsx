import { useNavigate } from "react-router-dom";
import NotFound from "../../assets/image/resultsNotFound.svg";
import { useAuth } from "../../hooks/auth";
import { IBook } from "../../interfaces";
import Card from "../Card";
import {
  Book,
  Books,
  Container,
  ContainerNotFound,
  InfoMessage,
} from "./styles";

interface IBookListProps {
  data: IBook[];
  handleSelectBook: (bookId: string) => void;
  favoriteOnPress: (bookId: string) => void;
}
const Listing: React.FC<IBookListProps> = ({
  data,
  handleSelectBook,
  favoriteOnPress,
}) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {data && data.length ? (
        <Container>
          <Books>
            {data?.map((book) => (
              <div key={book._id}>
                <Card
                  title={book.title}
                  favoritos={book.favorite}
                  image={book.image}
                  description={book.description ?? ""}
                  onPressFavorite={() => favoriteOnPress(book._id)}
                  bookId={Book.id}
                  onPressBook={() => handleSelectBook(book._id)}
                />
              </div>
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
