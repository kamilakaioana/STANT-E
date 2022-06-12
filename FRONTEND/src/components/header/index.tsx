import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";
import { pages } from "../../utils/headerUtils";
import LeftNav from "../LeftNav";
import {
  Button,
  Container,
  Logo,
  LogoContainer,
  MenuContainer,
  CustomBurger,
} from "./styles";

function Header() {
  const [navBarOpen, setNavBarOpen] = useState<boolean>(false);
  const { signOut, loadUser } = useAuth();
  const { clearSearchData } = useSearch();

  const navigate = useNavigate();

  const handlePress = (rota: string, id: string) => {
    const sairRoute = pages[4].id;
    if (id === sairRoute) {
      signOut();
      return;
    }
    clearSearchData();
    navigate(rota);
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <LogoContainer>
          <Logo />
          <CustomBurger
            onClick={() => setNavBarOpen(!navBarOpen)}
            open={navBarOpen}
          />
          {/* <MenuButton /> */}
        </LogoContainer>
        <MenuContainer>
          {/* // @TODO APOS VALIDACAO RETIRAR COMENTARIO */}
          {/* {pages.map(({ id, name, path }) => (
          <Item to={path} key={id}>
            {name}
          </Item>
        ))} */}
          {pages.map(({ id, name, path }) => (
            <Button key={id} onClick={() => handlePress(path, id)}>
              {name}
            </Button>
          ))}
          {/* <Button onClick={() => logoutLink()}>{SAIR}</Button> */}
        </MenuContainer>
      </Container>
      <LeftNav open={navBarOpen} />
    </>
  );
}

export default Header;
