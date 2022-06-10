import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";
import { StringsResources } from "../../utils/stringsResources";
import {
  Button,
  Container,
  Logo,
  LogoContainer,
  MenuContainer,
} from "./styles";

const { CADASTRAR, FAVORITOS, LIDOS, SAIR, HOME } = StringsResources.HEADER;
const pages = [
  {
    id: "1",
    name: HOME,
    path: "/",
  },
  {
    id: "2",
    name: FAVORITOS,
    path: "/favoritos",
  },
  {
    id: "3",
    name: LIDOS,
    path: "/lidos",
  },
  {
    id: "4",
    name: CADASTRAR,
    path: "/livro",
  },
];

function Header() {
  const { signOut, loadUser } = useAuth();
  const { clearSearchData } = useSearch();

  const navigate = useNavigate();

  const logoutLink = () => {
    signOut();
  };

  const handlePress = (rota: string) => {
    clearSearchData();
    navigate(rota);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuContainer>
        {/* // @TODO APOS VALIDACAO RETIRAR COMENTARIO */}
        {/* {pages.map(({ id, name, path }) => (
          <Item to={path} key={id}>
            {name}
          </Item>
        ))} */}
        {pages.map(({ id, name, path }) => (
          <Button key={id} onClick={() => handlePress(path)}>
            {name}
          </Button>
        ))}
        <Button onClick={() => logoutLink()}>{SAIR}</Button>
      </MenuContainer>
    </Container>
  );
}

export default Header;
