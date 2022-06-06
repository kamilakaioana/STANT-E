import { useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { StringsResources } from "../../utils/stringsResources";
import {
  ButtonSair,
  Container,
  Item,
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

  const logoutLink = () => {
    signOut();
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
        {pages.map(({ id, name, path }) => (
          <Item to={path} key={id}>
            {name}
          </Item>
        ))}
        <ButtonSair onClick={() => logoutLink()}>{SAIR}</ButtonSair>
      </MenuContainer>
    </Container>
  );
}

export default Header;
