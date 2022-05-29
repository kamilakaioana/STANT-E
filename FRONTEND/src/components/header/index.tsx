import { useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import {
  ButtonSair,
  Container,
  Item,
  Logo,
  LogoContainer,
  MenuContainer,
} from "./styles";

function Header() {
  const { signOut, loadUser } = useAuth();

  const logoutLink = () => {
    signOut();
  };

  const pages = [
    {
      id: "1",
      name: "Home",
      path: "/",
    },
    {
      id: "2",
      name: "Favoritos",
      path: "/favoritos",
    },
    {
      id: "3",
      name: "Lidos",
      path: "/lidos",
    },
    {
      id: "4",
      name: "Cadastrar",
      path: "/livro",
    },
  ];

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
        <ButtonSair onClick={() => logoutLink()}>Sair</ButtonSair>
      </MenuContainer>
    </Container>
  );
}

export default Header;
